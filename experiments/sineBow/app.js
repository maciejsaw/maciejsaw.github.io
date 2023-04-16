const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let audioContext;
let oscillator = null;
let gainNode;
let lastMousePosition = null;
let lastTimestamp = null;

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    startButton.style.display = 'none';
    canvas.style.display = 'block';
});

let mouseMoveTimeout;

function handlePointerMove(x, y, timestamp) {
    clearTimeout(mouseMoveTimeout);

    if (!oscillator) {
        oscillator = createOscillator();
    }

    let frequency = map(x, 0, canvas.width, 100, 500);
    let transitionTime = 0.1;
    let gainTransitionTime = 0.1; // 100ms transition time for gain ramp

    oscillator.frequency.linearRampToValueAtTime(frequency, audioContext.currentTime + transitionTime);

    if (lastMousePosition && lastTimestamp) {
        let dy = y - lastMousePosition.y;
        let dt = (timestamp - lastTimestamp) / 1000;
        let speed = Math.abs(dy) / dt;
        let maxSpeed = canvas.height;
        let gain = map(speed, 0, maxSpeed, 0, 1);

        gainNode.gain.linearRampToValueAtTime(gain, audioContext.currentTime + gainTransitionTime);
    } else {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + gainTransitionTime);
    }

    lastMousePosition = { x: x, y: y };
    lastTimestamp = timestamp;

    mouseMoveTimeout = setTimeout(() => {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + gainTransitionTime);
    }, 100);
}



function handlePointerLeave() {
    if (oscillator) {
        oscillator.stop();
        oscillator = null;
    }
    lastMousePosition = null;
    lastTimestamp = null;
}

function handlePointerEnd() {
    let transitionTime = 0.1; // 100ms transition time for gain ramp

    if (oscillator) {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + transitionTime);

        setTimeout(() => {
            oscillator.stop();
            oscillator = null;
        }, transitionTime * 1000);
    }

    lastMousePosition = null;
    lastTimestamp = null;
}

canvas.addEventListener('mousemove', (event) => {
    handlePointerMove(event.clientX, event.clientY, event.timeStamp);
});

canvas.addEventListener('mouseleave', handlePointerLeave);

canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    let touch = event.touches[0];
    handlePointerMove(touch.clientX, touch.clientY, event.timeStamp);
});

canvas.addEventListener('mouseleave', handlePointerEnd);
canvas.addEventListener('touchend', handlePointerEnd);

canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    let touch = event.touches[0];
    handlePointerMove(touch.clientX, touch.clientY, event.timeStamp);
});

function createOscillator() {
    let osc = audioContext.createOscillator();
    osc.type = 'sine';
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    osc.start();
    return osc;
}

// Frequencies of the notes C4, D4, E4, F4, G4, A4, B4 in Hz
// Frequencies of the notes from C3 to B5 in Hz
const noteFrequencies = {
    'C3': 130.81,
    'C#3': 138.59,
    'D3': 146.83,
    'D#3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3': 185.00,
    'G3': 196.00,
    'G#3': 207.65,
    'A3': 220.00,
    'A#3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5': 554.37,
    'D5': 587.33,
    'D#5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'F#5': 739.99,
    'G5': 783.99,
    'G#5': 830.61,
    'A5': 880.00,
    'A#5': 932.33,
    'B5': 987.77,
};

minFrequency = 190;
maxFrequency = 800;

function drawGridLines() {
    ctx.lineWidth = 1;
    ctx.font = '10px Arial';

    // Draw vertical gridlines for note frequencies
    for (const note in noteFrequencies) {
        const frequency = noteFrequencies[note];
        const x = map(frequency, minFrequency, maxFrequency, 0, canvas.width);

        // Change the color of non-sharp note lines to white and increase opacity
        if (note.includes('#')) {
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)'; // Increase opacity to 0.6
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'; // Match label color with gridline color
        } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; // Increase opacity to 0.6
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; // Match label color with gridline color
        }

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        ctx.fillText(note, x + 5, 20);
    }
}

// Set canvas size to fill the entire screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Apply horizontal background gradient to the canvas
function applyBackgroundGradient() {
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 255, 0.5)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGridLines();
}
applyBackgroundGradient();
window.addEventListener('resize', applyBackgroundGradient);
window.addEventListener('resize', drawGridLines);

function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}