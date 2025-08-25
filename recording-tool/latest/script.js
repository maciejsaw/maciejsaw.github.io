// --- DOM Elements ---
const sessionListView = document.getElementById('sessionListView');
const recordingView = document.getElementById('recordingView');
const newSessionButton = document.getElementById('newSessionButton');
const sessionList = document.getElementById('sessionList');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const downloadButton = document.getElementById('downloadButton');
const backButton = document.getElementById('backButton');
const outputContainer = document.getElementById('output');
const videoElement = document.getElementById('video-preview');
const frequencySelect = document.getElementById('frequencySelect');
const recordingViewHeader = document.getElementById('recordingViewHeader');
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const filterControls = document.querySelector('.filter-controls');
// Split-screen controls
const toggleSplitButton = document.getElementById('toggleSplitButton');
const splitPreviewContainer = document.getElementById('splitPreviewContainer');
const rightColumnHeader = document.querySelector('.right-column-header');
const filterControlsContainer = document.getElementById('filterControlsContainer');
// Session title editing controls
const editSessionTitleBtn = document.getElementById('editSessionTitleBtn');
const sessionTitleEdit = document.getElementById('sessionTitleEdit');
const sessionTitleInput = document.getElementById('sessionTitleInput');
const saveSessionTitleBtn = document.getElementById('saveSessionTitleBtn');
// Theme toggle
const themeToggleButton = document.getElementById('themeToggleButton');

// --- State Variables ---
let tabStream, micStream, captureInterval;
let isRecording = false;
let allCaptures = []; // This will now hold METADATA only when a session is loaded.
let filteredCaptures = [];
let currentSession = null; // Will hold the full session object including itemIds
let currentSessionId = null;
let currentFilter = 'all';
let isSplitActive = false;

// --- Database Configuration ---
const DB_NAME = 'UsabilitySessionsDB_v2';
const DB_VERSION = 1;

// --- Database Helper ---
const DBHelper = {
    db: null,
    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = event => reject("Database error: " + event.target.errorCode);
            request.onsuccess = event => {
                this.db = event.target.result;
                resolve(this.db);
            };
            request.onupgradeneeded = event => {
                const db = event.target.result;
                db.createObjectStore('sessions', { keyPath: 'id' });
                db.createObjectStore('captures', { keyPath: 'timestamp' });
                db.createObjectStore('notes', { keyPath: 'timestamp' });
            };
        });
    },

    // Generic function to perform a transaction
    _transaction(storeName, mode) {
        return this.db.transaction(storeName, mode).objectStore(storeName);
    },

    // Session operations
    addSession(session) { return new Promise((resolve, reject) => { const request = this._transaction('sessions', 'readwrite').add(session); request.onsuccess = resolve; request.onerror = reject; }); },
    saveSession(session) { return new Promise((resolve, reject) => { const request = this._transaction('sessions', 'readwrite').put(session); request.onsuccess = resolve; request.onerror = reject; }); },
    getSession(id) { return new Promise((resolve, reject) => { const request = this._transaction('sessions', 'readonly').get(id); request.onsuccess = () => resolve(request.result); request.onerror = reject; }); },
    getAllSessions() { return new Promise((resolve, reject) => { const request = this._transaction('sessions', 'readonly').getAll(); request.onsuccess = () => resolve(request.result); request.onerror = reject; }); },
    
    // Item operations
    addCapture(capture) { return new Promise((resolve, reject) => { const request = this._transaction('captures', 'readwrite').add(capture); request.onsuccess = resolve; request.onerror = reject; }); },
    getCapture(id) { return new Promise((resolve, reject) => { const request = this._transaction('captures', 'readonly').get(id); request.onsuccess = () => resolve(request.result); request.onerror = reject; }); },
    addNote(note) { return new Promise((resolve, reject) => { const request = this._transaction('notes', 'readwrite').add(note); request.onsuccess = resolve; request.onerror = reject; }); },
    getNote(id) { return new Promise((resolve, reject) => { const request = this._transaction('notes', 'readonly').get(id); request.onsuccess = () => resolve(request.result); request.onerror = reject; }); },
    updateNote(note) { return new Promise((resolve, reject) => { const request = this._transaction('notes', 'readwrite').put(note); request.onsuccess = resolve; request.onerror = reject; }); },
    
    // Multi-store transaction for safe deletion
    deleteSessionAndItems(sessionId, itemIds) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['sessions', 'captures', 'notes'], 'readwrite');
            tx.objectStore('sessions').delete(sessionId);
            const captureStore = tx.objectStore('captures');
            const noteStore = tx.objectStore('notes');
            itemIds.forEach(id => {
                // We don't know the type, so try deleting from both. It's safe.
                captureStore.delete(id);
                noteStore.delete(id);
            });
            tx.oncomplete = resolve;
            tx.onerror = reject;
        });
    },
    deleteNoteFromDB(noteId) {
        return new Promise((resolve, reject) => {
            const request = this._transaction('notes', 'readwrite').delete(noteId);
            request.onsuccess = resolve;
            request.onerror = reject;
        });
    }
};

// --- View & UI Logic ---
function showView(viewId) { document.querySelectorAll('.view').forEach(v => v.classList.remove('active')); document.getElementById(viewId).classList.add('active'); }

async function showSessionList() {
    sessionList.innerHTML = '';
    const sessions = await DBHelper.getAllSessions();
    if (sessions.length === 0) {
        sessionList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No saved sessions yet.</p>';
    } else {
        sessions.sort((a, b) => b.id - a.id).forEach(session => {
            const capturesCount = session.itemIds.filter(id => allCaptures.find(c => c.timestamp === id && c.type === 'capture')).length;
            const notesCount = session.itemIds.filter(id => allCaptures.find(c => c.timestamp === id && c.type === 'note')).length;
            
            const li = document.createElement('li');
            li.className = 'session-item';
            li.dataset.id = session.id;
            li.innerHTML = `
                <div class="session-item-info">
                    <strong>${session.title ? session.title : `Session from ${new Date(session.id).toLocaleString()}`}</strong>
                    <span>${session.itemIds.length} items</span>
                </div>
                <div class="session-item-actions">
                    <button class="open-btn btn" data-id="${session.id}"><i class="fa-solid fa-arrow-right-to-bracket"></i> <span>Open</span></button>
                    <button class="delete-btn btn" data-id="${session.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
            sessionList.appendChild(li);
        });
    }
    showView('sessionListView');
}

window.addEventListener('load', async () => {
    await DBHelper.init();
    await showSessionList();
    // Apply saved theme
    applySavedTheme();
});

function applySavedTheme() {
    let saved = localStorage.getItem('utr.theme');
    if (!saved) {
        saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.toggle('theme-dark', saved === 'dark');
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    if (!themeToggleButton) return;
    const isDark = document.documentElement.classList.contains('theme-dark');
    themeToggleButton.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeToggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleButton.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
}

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('theme-dark');
        localStorage.setItem('utr.theme', isDark ? 'dark' : 'light');
        updateThemeToggleIcon();
    });
}

function setupRecordingView(headerText) {
    // Prefer session title if present
    const header = currentSession?.title || headerText || `Session from ${new Date(currentSession?.id ?? Date.now()).toLocaleString()}`;
    recordingViewHeader.textContent = header;
    // Reset edit UI state
    if (sessionTitleEdit) sessionTitleEdit.style.display = 'none';
    const titleRow = document.querySelector('#recordingTitleContainer .title-row');
    if (titleRow) titleRow.style.display = 'flex';
    if (sessionTitleInput) sessionTitleInput.value = header;
    updateRecordingViewUI(false);
    renderTimeline();
    showView('recordingView');
    filterControls.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === currentFilter);
    });
}

function updateRecordingViewUI(isRecordingNow) {
    isRecording = isRecordingNow;
    startButton.style.display = isRecording ? 'none' : 'flex';
    stopButton.style.display = isRecording ? 'flex' : 'none';
    frequencySelect.disabled = isRecording;
    // Show split button only while recording
    toggleSplitButton.style.display = isRecording ? 'flex' : 'none';
    if (!isRecording) setSplitScreen(false);
}

// Add split-screen toggle logic
function setSplitScreen(active) {
    if (active === isSplitActive) return;
    isSplitActive = active;

    if (active) {
        // Hide normal right-column content
        if (rightColumnHeader) rightColumnHeader.style.display = 'none';
        filterControlsContainer.style.display = 'none';
        outputContainer.style.display = 'none';

        // Show preview container
        splitPreviewContainer.style.display = 'flex';

        // Move the video element into the preview container and show it
        if (videoElement.parentElement !== splitPreviewContainer) {
            splitPreviewContainer.appendChild(videoElement);
        }
        videoElement.style.display = 'block';
        // Ensure it keeps playing (muted for safety)
        videoElement.muted = true;
        videoElement.play().catch(() => {});
        toggleSplitButton.querySelector('span').textContent = 'Close split-screen';
    } else {
        // Hide preview and restore normal UI
        splitPreviewContainer.style.display = 'none';
        if (rightColumnHeader) rightColumnHeader.style.display = 'flex';
        filterControlsContainer.style.display = 'block';
        outputContainer.style.display = 'flex';

        videoElement.style.display = 'none';
        toggleSplitButton.querySelector('span').textContent = 'Split-screen preview';
    }
}

// --- Navigation & Event Listeners ---
newSessionButton.addEventListener('click', async () => {
    currentSessionId = Date.now();
    const defaultTitle = `Session from ${new Date(currentSessionId).toLocaleString()}`;
    currentSession = { id: currentSessionId, itemIds: [], title: defaultTitle };
    allCaptures = [];
    await DBHelper.addSession(currentSession);
    setupRecordingView();
});

sessionList.addEventListener('click', async (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const id = parseInt(button.dataset.id, 10);
    if (button.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this session and all its data? This cannot be undone.')) {
            const sessionToDelete = await DBHelper.getSession(id);
            if(sessionToDelete) {
                await DBHelper.deleteSessionAndItems(id, sessionToDelete.itemIds);
                await showSessionList();
            }
        }
    } else if (button.classList.contains('open-btn')) {
        currentSession = await DBHelper.getSession(id);
        if (currentSession) {
            currentSessionId = currentSession.id;
            const itemPromises = currentSession.itemIds.map(async (id) => {
                const note = await DBHelper.getNote(id);
                if (note) return note;
                const capture = await DBHelper.getCapture(id);
                if (capture) {
                    return {
                        type: 'capture',
                        timestamp: capture.timestamp,
                        videoWidth: capture.videoWidth,
                        videoHeight: capture.videoHeight
                    };
                }
                return null;
            });
            allCaptures = (await Promise.all(itemPromises)).filter(Boolean).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));

            currentFilter = 'all';

            setupRecordingView();
        }
    }
});

backButton.addEventListener('click', (e) => { e.preventDefault(); showSessionList(); });
startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
downloadButton.addEventListener('click', downloadAllAsZip);
addNoteButton.addEventListener('click', submitNote);
// Toggle split-screen on click
toggleSplitButton.addEventListener('click', () => setSplitScreen(!isSplitActive));
noteInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitNote(); } });

// --- Session Title Editing ---
if (editSessionTitleBtn && sessionTitleEdit && sessionTitleInput && saveSessionTitleBtn) {
    editSessionTitleBtn.addEventListener('click', () => {
        const titleRow = document.querySelector('#recordingTitleContainer .title-row');
        if (titleRow) titleRow.style.display = 'none';
        sessionTitleEdit.style.display = 'block';
        sessionTitleInput.value = recordingViewHeader.textContent || '';
        // Autofocus and select all text
        setTimeout(() => { sessionTitleInput.focus(); sessionTitleInput.select(); }, 0);
    });

    saveSessionTitleBtn.addEventListener('click', async () => {
        const newTitle = (sessionTitleInput.value || '').trim();
        const finalTitle = newTitle || `Session from ${new Date(currentSession?.id ?? Date.now()).toLocaleString()}`;
        if (currentSession) {
            currentSession.title = finalTitle;
            await DBHelper.saveSession(currentSession);
        }
        recordingViewHeader.textContent = finalTitle;
        sessionTitleEdit.style.display = 'none';
        const titleRow = document.querySelector('#recordingTitleContainer .title-row');
        if (titleRow) titleRow.style.display = 'flex';
        // Update list in background so when returning it's refreshed
        // (non-blocking; will refresh on back anyway)
    });

    sessionTitleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveSessionTitleBtn.click();
        }
    });
}

// --- Core Recording & Data Logic ---
function getUniqueTimestamp(initialDate) {
    let uniqueDate = initialDate;
    while (allCaptures.some(c => c.timestamp === uniqueDate.toISOString())) {
        uniqueDate.setMilliseconds(uniqueDate.getMilliseconds() + 1);
    }
    return uniqueDate.toISOString();
}

async function submitNote() {
    const text = noteInput.value.trim();
    const uniqueTimestamp = getUniqueTimestamp(new Date());
    const note = { type: 'note', timestamp: uniqueTimestamp, text };

    await DBHelper.addNote(note);
    currentSession.itemIds.push(note.timestamp);
    await DBHelper.saveSession(currentSession);

    allCaptures.push(note);
    allCaptures.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    applyFilter();

    const noteIndex = allCaptures.findIndex(c => c.timestamp === uniqueTimestamp);
    const nextItem = allCaptures[noteIndex + 1];
    const nextSiblingElement = nextItem ? document.getElementById(`entry-${nextItem.timestamp}`) : null;

    if (currentFilter === 'all' || currentFilter === 'notes' || currentFilter === 'annotated') {
        createTimelineEntry(note, nextSiblingElement);
        // Find the newly created element by its ID and scroll into view
        const newNoteElement = document.getElementById(`entry-${note.timestamp}`);
        if (newNoteElement) {
            newNoteElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    noteInput.value = '';
    noteInput.focus();
}

async function startRecording() {
    try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        tabStream = await navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: "tab" }, audio: true });
        updateRecordingViewUI(true);
        tabStream.getVideoTracks()[0].onended = stopRecording;
        videoElement.srcObject = tabStream;
        await videoElement.play();

        // --- FIX STARTS HERE ---
        // Instead of setInterval, use a self-scheduling async function with setTimeout.
        // This ensures one capture finishes before the next one starts, without creating a gap.
        const frequency = parseInt(frequencySelect.value, 10);

        (async function recordingLoop() {
            // If the stop button was pressed, the isRecording flag will be false, stopping the loop.
            if (!isRecording) return;

            // Wait for the entire capture process (recording, conversion, saving) to finish.
            await performCapture();

            // If still recording, schedule the next capture to run immediately after this one is done.
            if (isRecording) {
                // The global 'captureInterval' variable will hold the timer ID from setTimeout.
                captureInterval = setTimeout(recordingLoop, 0);
            }
        })(); // Immediately invoke the loop to start the first capture.
        // --- FIX ENDS HERE ---

    } catch (error) {
        console.error("Recording start error:", error);
        alert("Could not start recording. Please grant the required permissions.");
        updateRecordingViewUI(false);
    }
}

async function stopRecording() {
    // Ensure split-screen is turned off when stopping
    setSplitScreen(false);

    // Change clearInterval to clearTimeout to match the new recording loop
    if (captureInterval) clearTimeout(captureInterval);
    captureInterval = null;
    
    // The rest of the function is correct
    tabStream?.getTracks().forEach(track => track.stop());
    micStream?.getTracks().forEach(track => track.stop());
    tabStream = micStream = null;
    await DBHelper.saveSession(currentSession);
    updateRecordingViewUI(false);
}

async function performCapture() {
    if (!tabStream || !micStream) return;
    const frequency = parseInt(frequencySelect.value, 10);
    
    const videoTrack = tabStream.getVideoTracks()[0];
    const videoSettings = videoTrack.getSettings();

    const [videoBlob, micAudioBlob] = await Promise.all([
        recordVideoChunk(tabStream, frequency),
        recordAudioChunk(new MediaStream(micStream.getAudioTracks()), frequency)
    ]);
    
    const [videoChunkBase64, micAudioBase64] = await Promise.all([
        blobToBase64(videoBlob),
        blobToBase64(micAudioBlob)
    ]);
    
    const timestamp = getUniqueTimestamp(new Date());
    
    const capture = {
        type: 'capture',
        timestamp,
        videoChunkBase64,
        micAudioBase64,
        videoWidth: videoSettings.width,
        videoHeight: videoSettings.height
    };

    await DBHelper.addCapture(capture);
    
    currentSession.itemIds.push(timestamp);
    await DBHelper.saveSession(currentSession);
    
    const captureMeta = {
        type: 'capture',
        timestamp: capture.timestamp,
        videoWidth: capture.videoWidth,
        videoHeight: capture.videoHeight
    };
    
    allCaptures.push(captureMeta);
    allCaptures.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    applyFilter();

    if (currentFilter === 'all' || currentFilter === 'annotated') {
        createTimelineEntry(captureMeta);
    }
}

// --- Timeline Rendering and Filtering ---
function applyFilter() {
    const sourceCaptures = [...allCaptures];
    if (currentFilter === 'notes') {
        filteredCaptures = sourceCaptures.filter(item => item.type === 'note');
    } else if (currentFilter === 'annotated') {
        const annotatedSet = new Set();
        const itemsWithIndex = sourceCaptures.map((item, index) => ({...item, originalIndex: index}));
        for (const itemWithIndex of itemsWithIndex) {
            if (itemWithIndex.type === 'note') {
                annotatedSet.add(itemWithIndex);
                for (let j = itemWithIndex.originalIndex - 1; j >= 0; j--) {
                    if (sourceCaptures[j].type === 'capture') {
                        annotatedSet.add(itemsWithIndex.find(i => i.originalIndex === j));
                        break;
                    }
                }
                 for (let j = itemWithIndex.originalIndex + 1; j < sourceCaptures.length; j++) {
                    if (sourceCaptures[j].type === 'capture') {
                         annotatedSet.add(itemsWithIndex.find(i => i.originalIndex === j));
                        break;
                    }
                }
            }
        }
        filteredCaptures = Array.from(annotatedSet).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } else {
        filteredCaptures = sourceCaptures;
    }
}

filterControls.addEventListener('click', (e) => {
    // Use .closest() to ensure we get the button even if an icon inside it is clicked
    const clickedButton = e.target.closest('.filter-btn'); 

    if (clickedButton) {
        const allFilterButtons = filterControls.querySelectorAll('.filter-btn');
        allFilterButtons.forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
        currentFilter = clickedButton.dataset.filter;
        renderTimeline();
    }
});

function renderTimeline() {
    applyFilter();
    outputContainer.innerHTML = '';
    if (filteredCaptures.length === 0) {
        outputContainer.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding-top: 2rem; width: 100%;">' + (allCaptures.length > 0 ? 'No items match the current filter.' : 'No recordings or notes yet.') + '</p>';
    } else {
        filteredCaptures.forEach(item => createTimelineEntry(item));
    }
}

// --- Lazy Loading Logic ---
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { loadMedia(entry.target); } else { unloadMedia(entry.target); }
    });
}, { root: outputContainer, threshold: 0 });

async function loadMedia(element) {
    const timestamp = element.dataset.timestamp;
    if (!timestamp) return;
    const captureData = await DBHelper.getCapture(timestamp);
    if (!captureData) return;
    const video = element.querySelector('video');
    const audio = element.querySelector('audio');
    if (video && !video.src) { video.src = captureData.videoChunkBase64; }
    if (audio && !audio.src) { audio.src = captureData.micAudioBase64; }
}
function unloadMedia(element) {
    const video = element.querySelector('video');
    const audio = element.querySelector('audio');
    if (video && video.src) { video.pause(); video.removeAttribute('src'); video.load(); }
    if (audio && audio.src) { audio.pause(); audio.removeAttribute('src'); audio.load(); }
}

function createTimelineEntry(item, nextSiblingElement = null) {
    const entryDiv = document.createElement('div');
    entryDiv.id = `entry-${item.timestamp}`;
    let content = '';
    const timeString = new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    switch (item.type) {
        case 'note':
            entryDiv.className = 'note-entry';
            content = `
                <div class="entry-header">
                    <div class="entry-header-title"><i class="fa-solid fa-note-sticky"></i> Note <span class="entry-header-time">${timeString}</span></div>
                    <div class="entry-actions">
                        <button class="edit-note-btn icon-btn btn" data-timestamp="${item.timestamp}" title="Edit note"><i class="fa-solid fa-pencil"></i></button>
                        <button class="delete-note-btn icon-btn btn" data-timestamp="${item.timestamp}" title="Delete note"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="note-content"><div id="pre">${item.text}</div></div>`;
            entryDiv.innerHTML = content;
            break;

        case 'capture': default:
            entryDiv.className = 'capture-entry';
            entryDiv.dataset.timestamp = item.timestamp;
            content = `
                <div class="entry-header">
                   <div class="entry-header-title"><i class="fa-solid fa-video"></i> Capture <span class="entry-header-time">${timeString}</span></div>
                   <button class="add-note-from-capture-btn icon-btn btn" data-timestamp="${item.timestamp}" title="Add note to this capture">
                        <i class="fa-solid fa-file-circle-plus"></i>
                   </button>
                </div>
                <div class="video-container-target"></div>
                <div class="mic-audio-label"><i class="fa-solid fa-microphone"></i> <span>Microphone Audio</span></div>
                <audio controls></audio>`;
            
            entryDiv.innerHTML = content;

            const videoContainerTarget = entryDiv.querySelector('.video-container-target');
            if (videoContainerTarget) {
                let aspectRatio;
                if (item.videoWidth && item.videoHeight) {
                    aspectRatio = (item.videoHeight / item.videoWidth) * 100;
                } else {
                    aspectRatio = (9 / 16) * 100; // 56.25% for 16:9
                }

                const videoPlaceholder = document.createElement('div');
                videoPlaceholder.className = 'video-placeholder';
                videoPlaceholder.style.paddingBottom = `${aspectRatio}%`;

                const videoEl = document.createElement('video');
                videoEl.controls = true;
                videoPlaceholder.appendChild(videoEl);

                videoContainerTarget.replaceWith(videoPlaceholder);
            }
            
            lazyLoadObserver.observe(entryDiv);
            break;
    }
    
    if (nextSiblingElement) {
        outputContainer.insertBefore(entryDiv, nextSiblingElement);
    } else {
        outputContainer.appendChild(entryDiv);
    }
}

// --- Note Action Logic ---
outputContainer.addEventListener('click', async (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    const timestamp = button.dataset.timestamp;

    if (button.classList.contains('add-note-from-capture-btn')) { await addNoteFromCapture(timestamp); }
    else if (button.classList.contains('delete-note-btn')) { await deleteNote(timestamp); }
    else if (timestamp) {
        if (button.classList.contains('edit-note-btn')) { enterEditMode(timestamp); }
        else if (button.classList.contains('save-note-btn')) { await saveNoteEdit(timestamp); }
        else if (button.classList.contains('cancel-edit-btn')) { cancelNoteEdit(timestamp); }
    }
});

async function addNoteFromCapture(captureTimestamp) { /* ... unchanged ... */ const initialTimestamp = new Date(new Date(captureTimestamp).getTime() + 10); const uniqueTimestamp = getUniqueTimestamp(initialTimestamp); const note = { type: 'note', timestamp: uniqueTimestamp, text: '' }; await DBHelper.addNote(note); currentSession.itemIds.push(note.timestamp); allCaptures.push(note); allCaptures.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); currentSession.itemIds.sort((a, b) => new Date(a) - new Date(b)); await DBHelper.saveSession(currentSession); applyFilter(); const noteIndex = allCaptures.findIndex(c => c.timestamp === uniqueTimestamp); const nextItem = allCaptures[noteIndex + 1]; const nextSiblingElement = nextItem ? document.getElementById(`entry-${nextItem.timestamp}`) : null; if (currentFilter === 'all' || currentFilter === 'notes' || currentFilter === 'annotated') { createTimelineEntry(note, nextSiblingElement); enterEditMode(uniqueTimestamp); } }
async function deleteNote(timestamp) { /* ... unchanged ... */ if (confirm('Are you sure you want to delete this note?')) { await DBHelper.deleteNoteFromDB(timestamp); const noteIndex = allCaptures.findIndex(c => c.timestamp === timestamp); if (noteIndex > -1) allCaptures.splice(noteIndex, 1); const idIndex = currentSession.itemIds.indexOf(timestamp); if (idIndex > -1) currentSession.itemIds.splice(idIndex, 1); await DBHelper.saveSession(currentSession); applyFilter(); const noteElement = document.getElementById(`entry-${timestamp}`); if (noteElement) noteElement.remove(); } }
function enterEditMode(timestamp) { /* ... unchanged ... */ const noteDiv = document.getElementById(`entry-${timestamp}`); if (!noteDiv) return; const contentDiv = noteDiv.querySelector('.note-content'); const currentTextEl = contentDiv.querySelector('#pre'); const currentText = currentTextEl ? currentTextEl.innerText : ''; noteDiv.querySelector('.entry-actions').style.display = 'none'; contentDiv.innerHTML = `<textarea class="note-edit-textarea" rows="3">${currentText}</textarea><div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem;"><button class="cancel-edit-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-input); color:var(--text-primary);">Cancel</button><button class="save-note-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-button-dark); color:white;">Save Note</button></div>`; const textarea = contentDiv.querySelector('textarea'); textarea.focus(); textarea.select(); }
function cancelNoteEdit(timestamp) { /* ... unchanged ... */ const noteObject = allCaptures.find(c => c.timestamp === timestamp); if (!noteObject) return; const noteDiv = document.getElementById(`entry-${timestamp}`); if (noteDiv) { const contentDiv = noteDiv.querySelector('.note-content'); contentDiv.innerHTML = `<div id="pre">${noteObject.text}</div>`; noteDiv.querySelector('.entry-actions').style.display = 'flex'; } }
async function saveNoteEdit(timestamp) { /* ... unchanged ... */ const noteObject = allCaptures.find(c => c.timestamp === timestamp); if (noteObject) { const noteDiv = document.getElementById(`entry-${timestamp}`); const newText = noteDiv.querySelector('textarea').value; noteObject.text = newText; await DBHelper.updateNote(noteObject); cancelNoteEdit(timestamp); } }

// --- Helper Functions ---
function getUniqueZipFilename(zip, baseName, extension) { /* ... unchanged ... */ let finalName = `${baseName}${extension}`; let counter = 1; while (zip.file(finalName)) { finalName = `${baseName} (${counter})${extension}`; counter++; } return finalName; }
async function downloadAllAsZip() { /* ... unchanged ... */ if (filteredCaptures.length === 0) return alert("No items to download in the current view!"); downloadButton.disabled = true; downloadButton.querySelector('span').textContent = "Zipping..."; try { const zip = new JSZip(); const fetchPromises = filteredCaptures.map(item => { if (item.type === 'note') return DBHelper.getNote(item.timestamp); if (item.type === 'capture') return DBHelper.getCapture(item.timestamp); return Promise.resolve(null); }); const fullItems = (await Promise.all(fetchPromises)).filter(Boolean); for (const item of fullItems) { const timestampStr = getFormattedTimestamp(new Date(item.timestamp)); if (item.type === 'note') { const baseName = `${timestampStr}_note`; const fileName = getUniqueZipFilename(zip, baseName, '.txt'); zip.file(fileName, item.text); } else if (item.type === 'capture') { const videoBaseName = `${timestampStr}_video`; const videoFileName = getUniqueZipFilename(zip, videoBaseName, '.webm'); zip.file(videoFileName, item.videoChunkBase64.split(',')[1], { base64: true }); const audioBaseName = `${timestampStr}_mic-audio`; const audioFileName = getUniqueZipFilename(zip, audioBaseName, '.mp3'); zip.file(audioFileName, item.micAudioBase64.split(',')[1], { base64: true }); } } const zipBlob = await zip.generateAsync({ type: 'blob' }); const link = document.createElement('a'); link.href = URL.createObjectURL(zipBlob); link.download = `usability-session_${getFormattedTimestamp(new Date(currentSessionId))}_${currentFilter}.zip`; link.click(); URL.revokeObjectURL(link.href); } catch (e) { console.error(e); alert("Failed to create ZIP."); } finally { downloadButton.disabled = false; downloadButton.querySelector('span').textContent = "Download ZIP"; } }
function recordVideoChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp8,opus' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'video/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
function recordAudioChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'audio/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
const blobToBase64 = blob => new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(blob); reader.onloadend = () => resolve(reader.result); reader.onerror = error => reject(error); });
function getFormattedTimestamp(date) { const YYYY = date.getFullYear(); const MM = String(date.getMonth() + 1).padStart(2, '0'); const DD = String(date.getDate()).padStart(2, '0'); const hh = String(date.getHours()).padStart(2, '0'); const mm = String(date.getMinutes()).padStart(2, '0'); const ss = String(date.getSeconds()).padStart(2, '0'); return `${YYYY}-${MM}-${DD}_${hh}-${mm}-${ss}`; }

// (Removed legacy data migration logic)