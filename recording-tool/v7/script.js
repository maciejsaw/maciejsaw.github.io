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

// --- State Variables ---
let tabStream, micStream, captureInterval;
let isRecording = false;
let allCaptures = [];
let filteredCaptures = [];
let currentSessionId = null;
let currentFilter = 'all';

// --- Database Helper ---
const DBHelper = {
    db: null,
    init() { return new Promise((resolve, reject) => { const request = indexedDB.open('UsabilitySessionsDB', 1); request.onerror = event => reject("Database error: " + event.target.errorCode); request.onsuccess = event => { this.db = event.target.result; resolve(this.db); }; request.onupgradeneeded = event => { const db = event.target.result; db.createObjectStore('sessions', { keyPath: 'id' }); }; }); },
    async saveCurrentSession() { if (currentSessionId && allCaptures) { return DBHelper.saveSession({ id: currentSessionId, captures: allCaptures }); } },
    saveSession(sessionData) { return new Promise((resolve, reject) => { const transaction = this.db.transaction(['sessions'], 'readwrite'); const store = transaction.objectStore('sessions'); const request = store.put(sessionData); transaction.oncomplete = () => resolve(); transaction.onerror = event => reject("Save error: " + event.target.error); }); },
    getSession(id) { return new Promise((resolve, reject) => { const transaction = this.db.transaction(['sessions'], 'readonly'); const store = transaction.objectStore('sessions'); const request = store.get(id); request.onsuccess = () => resolve(request.result); request.onerror = event => reject("Get error: " + event.target.error); }); },
    getAllSessions() { return new Promise((resolve, reject) => { const transaction = this.db.transaction(['sessions'], 'readonly'); const store = transaction.objectStore('sessions'); const request = store.getAll(); request.onsuccess = () => resolve(request.result); request.onerror = event => reject("Get all error: " + event.target.error); }); },
    deleteSession(id) { return new Promise((resolve, reject) => { const transaction = this.db.transaction(['sessions'], 'readwrite'); const store = transaction.objectStore('sessions'); const request = store.delete(id); transaction.oncomplete = () => resolve(); transaction.onerror = event => reject("Delete error: " + event.target.error); }); }
};

// --- View & UI Logic ---
function showView(viewId) { document.querySelectorAll('.view').forEach(v => v.classList.remove('active')); document.getElementById(viewId).classList.add('active'); }

function getSessionStats(session) {
    const capturesCount = session.captures.filter(c => c.type === 'capture').length;
    const notesCount = session.captures.filter(c => c.type === 'note').length;
    return { capturesCount, notesCount };
}

async function showSessionList() {
    sessionList.innerHTML = '';
    const sessions = await DBHelper.getAllSessions();
    if (sessions.length === 0) {
        sessionList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No saved sessions yet.</p>';
    } else {
        sessions.sort((a, b) => b.id - a.id).forEach(session => {
            const stats = getSessionStats(session);
            const li = document.createElement('li');
            li.className = 'session-item';
            li.dataset.id = session.id;
            li.innerHTML = `
                <div class="session-item-info">
                    <strong>Session from ${new Date(session.id).toLocaleString()}</strong>
                    <span>${stats.capturesCount} captures • ${stats.notesCount} notes</span>
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

window.addEventListener('load', async () => { await DBHelper.init(); await showSessionList(); });

function setupRecordingView(headerText) {
    recordingViewHeader.textContent = headerText;
    updateRecordingViewUI(false);
    renderTimeline();
    showView('recordingView');
}

function updateRecordingViewUI(isRecordingNow) {
    isRecording = isRecordingNow;
    startButton.style.display = isRecording ? 'none' : 'flex';
    stopButton.style.display = isRecording ? 'flex' : 'none';
    frequencySelect.disabled = isRecording;
}

// --- Navigation & Event Listeners ---
newSessionButton.addEventListener('click', () => {
    currentSessionId = Date.now();
    allCaptures = [];
    setupRecordingView(`Session: ${new Date().toLocaleString()}`);
});

sessionList.addEventListener('click', async (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const id = parseInt(button.dataset.id, 10);
    if (button.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this session? This cannot be undone.')) {
            await DBHelper.deleteSession(id);
            await showSessionList();
        }
    } else if (button.classList.contains('open-btn')) {
        const session = await DBHelper.getSession(id);
        if (session) {
            currentSessionId = session.id;
            allCaptures = session.captures;
            setupRecordingView(`Session: ${new Date(session.id).toLocaleString()}`);
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
        allCaptures.push(note);
        allCaptures.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        await DBHelper.saveCurrentSession();
        renderTimeline();
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
        const frequency = parseInt(frequencySelect.value, 10);
        performCapture();
        captureInterval = setInterval(performCapture, frequency);
    } catch (error) {
        console.error("Recording start error:", error);
        alert("Could not start recording. Please grant the required permissions.");
        updateRecordingViewUI(false);
    }
}

async function stopRecording() {
    if (captureInterval) clearInterval(captureInterval);
    captureInterval = null;
    tabStream?.getTracks().forEach(track => track.stop());
    micStream?.getTracks().forEach(track => track.stop());
    tabStream = micStream = null;
    await DBHelper.saveCurrentSession();
    updateRecordingViewUI(false);
}

async function performCapture() {
    if (!tabStream || !micStream) return;
    const frequency = parseInt(frequencySelect.value, 10);
    const [videoBlob, micAudioBlob] = await Promise.all([recordVideoChunk(tabStream, frequency), recordAudioChunk(new MediaStream(micStream.getAudioTracks()), frequency)]);
    const [videoChunkBase64, micAudioBase64] = await Promise.all([blobToBase64(videoBlob), blobToBase64(micAudioBlob)]);
    const captureSet = { type: 'capture', timestamp: getUniqueTimestamp(new Date()), videoChunkBase64, micAudioBase64 };
    allCaptures.push(captureSet);
    allCaptures.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    renderTimeline();
}

// --- Timeline Rendering and Filtering ---
filterControls.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        currentFilter = e.target.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderTimeline();
    }
});

function renderTimeline() {
    const sourceCaptures = [...allCaptures];
    if (currentFilter === 'notes') {
        filteredCaptures = sourceCaptures.filter(item => item.type === 'note');
    } else if (currentFilter === 'annotated') {
        const annotatedSet = new Set();
        for (let i = 0; i < sourceCaptures.length; i++) {
            if (sourceCaptures[i].type === 'note') {
                annotatedSet.add(sourceCaptures[i]);
                for (let j = i - 1; j >= 0; j--) { if (sourceCaptures[j].type === 'capture') { annotatedSet.add(sourceCaptures[j]); break; } }
                for (let j = i + 1; j < sourceCaptures.length; j++) { if (sourceCaptures[j].type === 'capture') { annotatedSet.add(sourceCaptures[j]); break; } }
            }
        }
        filteredCaptures = Array.from(annotatedSet).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } else {
        filteredCaptures = sourceCaptures;
    }

    outputContainer.innerHTML = '';
    if (filteredCaptures.length === 0) {
        outputContainer.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding-top: 2rem; width: 100%;">' + (allCaptures.length > 0 ? 'No items match the current filter.' : 'No recordings or notes yet.') + '</p>';
    } else {
        filteredCaptures.forEach(item => createTimelineEntry(item));
    }

    if (isRecording) {
        outputContainer.scroll({ top: outputContainer.scrollHeight, behavior: 'smooth' });
    }
}

// --- Lazy Loading Logic ---
const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMedia(entry.target);
        } else {
            unloadMedia(entry.target);
        }
    });
}, { root: outputContainer, threshold: 0 });

function loadMedia(element) {
    const timestamp = element.dataset.timestamp;
    if (!timestamp) return;
    const captureData = allCaptures.find(c => c.timestamp === timestamp);
    if (!captureData) return;

    const video = element.querySelector('video');
    const audio = element.querySelector('audio');
    if (video && !video.src) {
        video.src = captureData.videoChunkBase64;
    }
    if (audio && !audio.src) {
        audio.src = captureData.micAudioBase64;
    }
}
function unloadMedia(element) {
    const video = element.querySelector('video');
    const audio = element.querySelector('audio');
    if (video && video.src) {
        video.pause();
        video.removeAttribute('src');
        video.load();
    }
    if (audio && audio.src) {
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
    }
}

function createTimelineEntry(item) {
    const entryDiv = document.createElement('div');
    let content = '';
    const timeString = new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    switch (item.type) {
        case 'note':
            entryDiv.className = 'note-entry'; entryDiv.id = `note-${item.timestamp}`;
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
    outputContainer.appendChild(entryDiv);
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
        else if (button.classList.contains('cancel-edit-btn')) { renderTimeline(); }
    }
});

async function addNoteFromCapture(captureTimestamp) {
    const initialTimestamp = new Date(new Date(captureTimestamp).getTime() + 10);
    const uniqueTimestamp = getUniqueTimestamp(initialTimestamp);
    const note = { type: 'note', timestamp: uniqueTimestamp, text: '' };
    allCaptures.push(note);
    allCaptures.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    await DBHelper.saveCurrentSession();
    renderTimeline();
    enterEditMode(uniqueTimestamp);
}

async function deleteNote(timestamp) {
    if (confirm('Are you sure you want to delete this note?')) {
        const noteIndex = allCaptures.findIndex(c => c.timestamp === timestamp);
        if (noteIndex > -1) {
            allCaptures.splice(noteIndex, 1);
            await DBHelper.saveCurrentSession();
            renderTimeline();
        }
    }
}

function enterEditMode(timestamp) {
    const noteDiv = document.getElementById(`note-${timestamp}`);
    if (!noteDiv) return;
    const contentDiv = noteDiv.querySelector('.note-content');
    const currentTextEl = contentDiv.querySelector('#pre');
    const currentText = currentTextEl ? currentTextEl.innerText : '';
    noteDiv.querySelector('.edit-note-btn').style.display = 'none';
    noteDiv.querySelector('.delete-note-btn').style.display = 'none';
    contentDiv.innerHTML = `<textarea class="note-edit-textarea" rows="3" style="background: white;">${currentText}</textarea>
        <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem;">
            <button class="cancel-edit-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-input); color:var(--text-primary);">Cancel</button>
            <button class="save-note-btn btn" data-timestamp="${timestamp}" style="background:var(--bg-button-dark); color:white;">Save Note</button>
        </div>`;
    const textarea = contentDiv.querySelector('textarea');
    textarea.focus();
    textarea.select();
}

async function saveNoteEdit(timestamp) {
    const noteDiv = document.getElementById(`note-${timestamp}`);
    const newText = noteDiv.querySelector('textarea').value;
    const noteObject = allCaptures.find(c => c.type === 'note' && c.timestamp === timestamp);
    if (noteObject) {
        noteObject.text = newText;
        await DBHelper.saveCurrentSession();
    }
    renderTimeline();
}

// --- Helper Functions ---
function getUniqueZipFilename(zip, baseName, extension) {
    let finalName = `${baseName}${extension}`;
    let counter = 1;
    while (zip.file(finalName)) {
        finalName = `${baseName} (${counter})${extension}`;
        counter++;
    }
    return finalName;
}

async function downloadAllAsZip() {
    if (filteredCaptures.length === 0) return alert("No items to download in the current view!");
    downloadButton.disabled = true;
    downloadButton.querySelector('span').textContent = "Zipping...";
    try {
        const zip = new JSZip();
        for (const item of filteredCaptures) {
            const timestampStr = getFormattedTimestamp(new Date(item.timestamp));
            if (item.type === 'note') {
                const baseName = `${timestampStr}_note`;
                const fileName = getUniqueZipFilename(zip, baseName, '.txt');
                zip.file(fileName, item.text);
            } else {
                const videoBaseName = `${timestampStr}_video`;
                const videoFileName = getUniqueZipFilename(zip, videoBaseName, '.webm');
                zip.file(videoFileName, item.videoChunkBase64.split(',')[1], { base64: true });

                const audioBaseName = `${timestampStr}_mic-audio`;
                const audioFileName = getUniqueZipFilename(zip, audioBaseName, '.mp3');
                zip.file(audioFileName, item.micAudioBase64.split(',')[1], { base64: true });
            }
        }
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(zipBlob);
        link.download = `usability-session_${getFormattedTimestamp(new Date(currentSessionId))}_${currentFilter}.zip`;
        link.click();
        URL.revokeObjectURL(link.href);
    } catch (e) { console.error(e); alert("Failed to create ZIP."); }
    finally {
        downloadButton.disabled = false;
        downloadButton.querySelector('span').textContent = "Download ZIP";
    }
}

function recordVideoChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp8,opus' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'video/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
function recordAudioChunk(stream, duration) { return new Promise((resolve, reject) => { const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' }); const chunks = []; recorder.ondataavailable = e => chunks.push(e.data); recorder.onstop = () => resolve(new Blob(chunks, { type: 'audio/webm' })); recorder.onerror = e => reject(e.error); recorder.start(); setTimeout(() => recorder.stop(), duration); }); }
const blobToBase64 = blob => new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(blob); reader.onloadend = () => resolve(reader.result); reader.onerror = error => reject(error); });
function getFormattedTimestamp(date) { const YYYY = date.getFullYear(); const MM = String(date.getMonth() + 1).padStart(2, '0'); const DD = String(date.getDate()).padStart(2, '0'); const hh = String(date.getHours()).padStart(2, '0'); const mm = String(date.getMinutes()).padStart(2, '0'); const ss = String(date.getSeconds()).padStart(2, '0'); return `${YYYY}-${MM}-${DD}_${hh}-${mm}-${ss}`; }