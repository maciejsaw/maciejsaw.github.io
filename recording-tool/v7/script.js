// --- DOM Elements ---
const sessionListView = document.getElementById('sessionListView');
const recordingView = document.getElementById('recordingView');
const newSessionButton = document.getElementById('newSessionButton');
const migrateDataButton = document.getElementById('migrateDataButton');
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

// --- State Variables ---
let tabStream, micStream, captureInterval;
let isRecording = false;
let allCaptures = []; // This will now hold METADATA only when a session is loaded.
let filteredCaptures = [];
let currentSession = null; // Will hold the full session object including itemIds
let currentSessionId = null;
let currentFilter = 'all';

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
                    <strong>Session from ${new Date(session.id).toLocaleString()}</strong>
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
    await checkForOldData();
});

function setupRecordingView(headerText) {
    recordingViewHeader.textContent = headerText;
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
}

// --- Navigation & Event Listeners ---
newSessionButton.addEventListener('click', async () => {
    currentSessionId = Date.now();
    currentSession = { id: currentSessionId, itemIds: [] };
    allCaptures = [];
    await DBHelper.addSession(currentSession);
    setupRecordingView(`Session: ${new Date().toLocaleString()}`);
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
                // Fetch both, one will be null. This is simpler than knowing the type beforehand.
                const note = await DBHelper.getNote(id);
                if (note) return note;
                const capture = await DBHelper.getCapture(id);
                if (capture) return { type: 'capture', timestamp: capture.timestamp }; // Only metadata
                return null;
            });
            allCaptures = (await Promise.all(itemPromises)).filter(Boolean).sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));

            setupRecordingView(`Session: ${new Date(currentSession.id).toLocaleString()}`);
        }
    }
});

backButton.addEventListener('click', (e) => { e.preventDefault(); showSessionList(); });
startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
downloadButton.addEventListener('click', downloadAllAsZip);
addNoteButton.addEventListener('click', submitNote);
noteInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitNote(); } });

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
    if (text) {
        const uniqueTimestamp = getUniqueTimestamp(new Date());
        const note = { type: 'note', timestamp: uniqueTimestamp, text: text };
        
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
             
             // Find the newly created element by its ID
             const newNoteElement = document.getElementById(`entry-${note.timestamp}`);
             if (newNoteElement) {
                // Scroll it into view with a smooth animation
                newNoteElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
             }
        }
        
        noteInput.value = '';
        noteInput.focus();
    }
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

async function performCapture() { /* ... unchanged ... */ if (!tabStream || !micStream) return; const frequency = parseInt(frequencySelect.value, 10); const [videoBlob, micAudioBlob] = await Promise.all([recordVideoChunk(tabStream, frequency), recordAudioChunk(new MediaStream(micStream.getAudioTracks()), frequency)]); const [videoChunkBase64, micAudioBase64] = await Promise.all([blobToBase64(videoBlob), blobToBase64(micAudioBlob)]); const timestamp = getUniqueTimestamp(new Date()); const capture = { type: 'capture', timestamp, videoChunkBase64, micAudioBase64 }; await DBHelper.addCapture(capture); currentSession.itemIds.push(timestamp); await DBHelper.saveSession(currentSession); const captureMeta = { type: 'capture', timestamp: capture.timestamp }; allCaptures.push(captureMeta); allCaptures.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp)); applyFilter(); if (currentFilter === 'all' || currentFilter === 'annotated') { createTimelineEntry(captureMeta); } }

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
                <video controls></video>
                <div class="mic-audio-label"><i class="fa-solid fa-microphone"></i> <span>Microphone Audio</span></div>
                <audio controls></audio>`;
            lazyLoadObserver.observe(entryDiv);
            break;
    }
    entryDiv.innerHTML = content;
    
    if (nextSiblingElement) { outputContainer.insertBefore(entryDiv, nextSiblingElement); } 
    else { outputContainer.appendChild(entryDiv); }
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
function enterEditMode(timestamp) { /* ... unchanged ... */ const noteDiv = document.getElementById(`entry-${timestamp}`); if (!noteDiv) return; const contentDiv = noteDiv.querySelector('.note-content'); const currentTextEl = contentDiv.querySelector('#pre'); const currentText = currentTextEl ? currentTextEl.innerText : ''; noteDiv.querySelector('.entry-actions').style.display = 'none'; contentDiv.innerHTML = `<textarea class="note-edit-textarea" rows="3" style="background: white;">${currentText}</textarea><div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem;"><button class="cancel-edit-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-input); color:var(--text-primary);">Cancel</button><button class="save-note-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-button-dark); color:white;">Save Note</button></div>`; const textarea = contentDiv.querySelector('textarea'); textarea.focus(); textarea.select(); }
function cancelNoteEdit(timestamp) { /* ... unchanged ... */ const noteObject = allCaptures.find(c => c.timestamp === timestamp); if (!noteObject) return; const noteDiv = document.getElementById(`entry-${timestamp}`); if (noteDiv) { const contentDiv = noteDiv.querySelector('.note-content'); contentDiv.innerHTML = `<div id="pre">${noteObject.text}</div>`; noteDiv.querySelector('.entry-actions').style.display = 'flex'; } }
async function saveNoteEdit(timestamp) { /* ... unchanged ... */ const noteObject = allCaptures.find(c => c.timestamp === timestamp); if (noteObject) { const noteDiv = document.getElementById(`entry-${timestamp}`); const newText = noteDiv.querySelector('textarea').value; noteObject.text = newText; await DBHelper.updateNote(noteObject); cancelNoteEdit(timestamp); } }

// --- Helper Functions ---
function getUniqueZipFilename(zip, baseName, extension) { /* ... unchanged ... */ let finalName = `${baseName}${extension}`; let counter = 1; while (zip.file(finalName)) { finalName = `${baseName} (${counter})${extension}`; counter++; } return finalName; }
async function downloadAllAsZip() { /* ... unchanged ... */ if (filteredCaptures.length === 0) return alert("No items to download in the current view!"); downloadButton.disabled = true; downloadButton.querySelector('span').textContent = "Zipping..."; try { const zip = new JSZip(); const fetchPromises = filteredCaptures.map(item => { if (item.type === 'note') return DBHelper.getNote(item.timestamp); if (item.type === 'capture') return DBHelper.getCapture(item.timestamp); return Promise.resolve(null); }); const fullItems = (await Promise.all(fetchPromises)).filter(Boolean); for (const item of fullItems) { const timestampStr = getFormattedTimestamp(new Date(item.timestamp)); if (item.type === 'note') { const baseName = `${timestampStr}_note`; const fileName = getUniqueZipFilename(zip, baseName, '.txt'); zip.file(fileName, item.text); } else if (item.type === 'capture') { const videoBaseName = `${timestampStr}_video`; const videoFileName = getUniqueZipFilename(zip, videoBaseName, '.webm'); zip.file(videoFileName, item.videoChunkBase64.split(',')[1], { base64: true }); const audioBaseName = `${timestampStr}_mic-audio`; const audioFileName = getUniqueZipFilename(zip, audioBaseName, '.mp3'); zip.file(audioFileName, item.micAudioBase64.split(',')[1], { base64: true }); } } const zipBlob = await zip.generateAsync({ type: 'blob' }); const link = document.createElement('a'); link.href = URL.createObjectURL(zipBlob); link.download = `usability-session_${getFormattedTimestamp(new Date(currentSessionId))}_${currentFilter}.zip`; link.click(); URL.revokeObjectURL(link.href); } catch (e) { console.error(e); alert("Failed to create ZIP."); } finally { downloadButton.disabled = false; downloadButton.querySelector('span').textContent = "Download ZIP"; } }
function recordVideoChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp8,opus' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'video/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
function recordAudioChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'audio/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
const blobToBase64 = blob => new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(blob); reader.onloadend = () => resolve(reader.result); reader.onerror = error => reject(error); });
function getFormattedTimestamp(date) { const YYYY = date.getFullYear(); const MM = String(date.getMonth() + 1).padStart(2, '0'); const DD = String(date.getDate()).padStart(2, '0'); const hh = String(date.getHours()).padStart(2, '0'); const mm = String(date.getMinutes()).padStart(2, '0'); const ss = String(date.getSeconds()).padStart(2, '0'); return `${YYYY}-${MM}-${DD}_${hh}-${mm}-${ss}`; }

// --- Data Migration Logic ---
async function checkForOldData() {
    try {
        const migrationFlag = localStorage.getItem('migrationV1toV2Completed');
        if (migrationFlag) return; // Don't show button if already migrated

        const dbs = await indexedDB.databases();
        if (dbs.some(db => db.name === 'UsabilitySessionsDB')) {
            migrateDataButton.style.display = 'inline-flex';
        }
    } catch (e) {
        console.warn("Could not check for old databases. Browser might not support indexedDB.databases().");
    }
}

migrateDataButton.addEventListener('click', async () => {
    if (!confirm("This will migrate data from the old app version to the new, faster format. The old data will not be deleted. Continue?")) return;

    migrateDataButton.disabled = true;
    migrateDataButton.querySelector('span').textContent = 'Migrating...';
    
    try {
        const oldDBRequest = indexedDB.open('UsabilitySessionsDB', 1);
        oldDBRequest.onsuccess = async (event) => {
            const oldDB = event.target.result;
            const transaction = oldDB.transaction(['sessions'], 'readonly');
            const store = transaction.objectStore('sessions');
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = async () => {
                const oldSessions = getAllRequest.result;
                for (const oldSession of oldSessions) {
                    const newSession = { id: oldSession.id, itemIds: [] };
                    const itemPromises = [];

                    for (const item of oldSession.captures) {
                        newSession.itemIds.push(item.timestamp);
                        if (item.type === 'note') {
                            itemPromises.push(DBHelper.addNote(item));
                        } else if (item.type === 'capture') {
                            itemPromises.push(DBHelper.addCapture(item));
                        }
                    }
                    itemPromises.push(DBHelper.addSession(newSession));
                    await Promise.all(itemPromises);
                }
                
                // MODIFIED: Set flag in localStorage on success
                localStorage.setItem('migrationV1toV2Completed', 'true');
                
                alert("Migration successful! Refreshing the page.");
                location.reload();
            };
            getAllRequest.onerror = (e) => { throw new Error("Could not read old session data."); };
        };
        oldDBRequest.onerror = (e) => { throw new Error("Could not open old database."); };

    } catch (error) {
        console.error("Migration failed:", error);
        alert("Migration failed. Check the console for details.");
        migrateDataButton.disabled = false;
        migrateDataButton.querySelector('span').textContent = 'Migrate Old Data';
    }
});