const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const carSelection = document.getElementById('carSelection');
const carOptions = document.getElementsByClassName('carOption');
const previousScore = document.getElementById('previousScore');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let carImg = new Image();
carImg.src = 'https://emoji.aranja.com/static/emoji-data/img-apple-160/1f697.png';


car = {
  x: 50,
  y: canvas.height / 2 - 15,
  width: 60,
  height: 60,
  speedY: 0,
  speedX: 0
};

let obstacles = [];
let score = 0;
let animationId;
let gameActive = false;
let obstacleSpeed = 1.0;
let startTime;
let endTime;

let touchStartY;
let touchStartX;

function drawCar() {
  ctx.save();
  ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
  ctx.scale(-1, 1);
  ctx.drawImage(carImg, -car.width / 2, -car.height / 2, car.width, car.height);
  ctx.restore();
}

function drawObstacles() {
  for (const obstacle of obstacles) {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function moveCar(e) {
  if (gameActive) {
    if (e.type === 'touchstart') {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    } else if (e.type === 'touchmove') {
      car.y += e.touches[0].clientY - touchStartY;
      car.x += e.touches[0].clientX - touchStartX;
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;

      // Update audio properties
      updateAudioProperties(e.touches[0].clientX - touchStartX);
    } else if (e.type === 'mousemove') {
      car.y = e.clientY - car.height / 2;
      car.x = e.clientX - car.width / 2;

      // Update audio properties
      updateAudioProperties(e.movementX);
    }
  }
}


function generateObstacles() {
  if (Math.random() < 0.005) {
    const minHeight = car.height * 2.5;
    const maxHeight = canvas.height - minHeight;
    const buffer = car.height * 0.3;
    const carWidth = car.width;

    // Calculate the minimum and maximum distances between the obstacles
    const minDistance = carWidth * 2;
    const maxDistance = canvas.width / 3;

    let obstacleHeight = minHeight + Math.random() * (maxHeight - minHeight - buffer);

    let topObstacle;
    let bottomObstacle;
    let distance;

    // Randomly choose top or bottom obstacle
    if (Math.random() < 0.5) {
      // Create a top obstacle
      topObstacle = {
        x: canvas.width,
        y: 0,
        width: 30,
        height: obstacleHeight
      };

      // Calculate a random distance between the obstacles
      distance = minDistance + Math.random() * (maxDistance - minDistance);

      // Calculate the height of the bottom obstacle
      obstacleHeight = canvas.height - obstacleHeight - buffer - distance;

      // Create a bottom obstacle
      bottomObstacle = {
        x: canvas.width,
        y: canvas.height - obstacleHeight,
        width: 30,
        height: obstacleHeight
      };
    } else {
      // Create a bottom obstacle
      bottomObstacle = {
        x: canvas.width,
        y: canvas.height - obstacleHeight - buffer,
        width: 30,
        height: obstacleHeight
      };

      // Calculate a random distance between the obstacles
      distance = minDistance + Math.random() * (maxDistance - minDistance);

      // Calculate the height of the top obstacle
      obstacleHeight = canvas.height - obstacleHeight - buffer - distance;

      // Create a top obstacle
      topObstacle = {
        x: canvas.width,
        y: 0,
        width: 30,
        height: obstacleHeight
      };
    }

    // Check that the obstacles never appear closer to each other than double of the car width
    if (obstacles.length > 0) {
      const lastObstacle = obstacles[obstacles.length - 1];
      const lastObstacleX = lastObstacle.x + lastObstacle.width;
      if (canvas.width - lastObstacleX < minDistance * 2) {
        return;
      }
    }

    obstacles.push(topObstacle);
    obstacles.push(bottomObstacle);
  }
}


function updateObstacles() {
  for (const obstacle of obstacles) {
    obstacle.x -= obstacleSpeed;
    // Checking collision
    if (
      car.x < obstacle.x + obstacle.width &&
      car.x + car.width - 10 > obstacle.x &&
      car.y < obstacle.y + obstacle.height &&
      car.y + car.height - 10 > obstacle.y
    ) {
      endGame();
      return;
    }
  }
  // Removing obstacles outside the screen
  obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);
}

function drawScore() {
  ctx.fillStyle = 'black';
  ctx.font = '24px Arial';
  ctx.fillText(`Wynik: ${Math.floor(score)}`, 10, 30);
}

// Audio--
let audioContext1, oscillator1, gainNode1, frequency1, volume1, targetFrequency1, targetVolume1;
let audioContext2, oscillator2, gainNode2, frequency2, volume2, targetFrequency2, targetVolume2;
let lastMoveTime1;
let lastMoveTime2;

// const handleMouseMove = ({ movementX, movementY }) => {
//   // Handle mouse movement for oscillator1
//   const speed1 = Math.abs(movementX) / (Date.now() - lastMoveTime1);
//   if (movementX > 0 && movementX < 2000) {
//     targetFrequency1 = 200 + Math.abs(movementX * 25) * (0.9 + Math.random() * 0.2) + (Math.random() - 0.5) * 20;
//   } else {
//     targetFrequency1 = Math.max(150, frequency1 - speed1 * 50);
//   }
//   targetVolume1 = 0.2 + Math.random() * 0.1;
//   lastMoveTime1 = Date.now();

//   // Handle mouse movement for oscillator2
//   const speed2 = Math.abs(movementX) / (Date.now() - lastMoveTime2);
//   if (movementX > 0 && movementX < 2000) {
//     targetFrequency2 = 200 + Math.abs(movementX * 25) * (0.9 + Math.random() * 0.2) + (Math.random() - 0.5) * 20;
//   } else {
//     targetFrequency2 = Math.max(150, frequency2 - speed2 * 50);
//   }
//   targetVolume2 = 0.2 + Math.random() * 0.1;
//   lastMoveTime2 = Date.now();
//   console.log(targetFrequency1);
//   console.log(speed1);
//   console.log(speed2);
// };

function updateAudioProperties(movementX) {
  const speed = Math.abs(movementX) / (Date.now() - lastMoveTime1);
  targetFrequency1 = 200 + Math.abs(movementX * 25) * (0.9 + Math.random() * 0.2) + (Math.random() - 0.5) * 20;
  targetVolume1 = 0.2 + Math.random() * 0.1;
  lastMoveTime1 = Date.now();
}

const initializeAudio = () => {
  frequency1 = 200;
  volume1 = 0.2;
  targetFrequency1 = 200;
  targetVolume1 = 0.2;
  frequency2 = 200;
  volume2 = 0.2;
  targetFrequency2 = 200;
  targetVolume2 = 0.2;
  lastMoveTime1 = 0;
  lastMoveTime2 = 0;

  audioContext1 = new (window.AudioContext || window.webkitAudioContext)();
  oscillator1 = audioContext1.createOscillator();
  gainNode1 = audioContext1.createGain();
  oscillator1.type = "sine";
  gainNode1.gain.value = volume1;
  oscillator1.connect(gainNode1);
  gainNode1.connect(audioContext1.destination);

  audioContext2 = new (window.AudioContext || window.webkitAudioContext)();
  oscillator2 = audioContext2.createOscillator();
  gainNode2 = audioContext2.createGain();
  oscillator2.type = "sine";
  gainNode2.gain.value = volume2;
  oscillator2.connect(gainNode2);
  gainNode2.connect(audioContext2.destination);
};

const startAudio = () => {
  if (!audioContext1 || !audioContext2) {
    initializeAudio();
    //canvas.addEventListener("mousemove", handleMouseMove);
  }
  oscillator1.start();
  oscillator2.start();

  setInterval(() => {
    if (oscillator1 && oscillator2) {
      // Update oscillator1
      frequency1 += (targetFrequency1 - frequency1) * 0.1;
      if (Number.isFinite(frequency1)) {
        oscillator1.frequency.setValueAtTime(frequency1, audioContext1.currentTime);
      }
      volume1 += (targetVolume1 - volume1) * 0.05;
      gainNode1.gain.setValueAtTime(volume1, audioContext1.currentTime);

      // Update oscillator2
      frequency2 += (targetFrequency2 - frequency2) * 0.1;
      if (Number.isFinite(frequency2)) {
        oscillator2.frequency.setValueAtTime(frequency2, audioContext2.currentTime);
      }
      volume2 += (targetVolume2 - volume2) * 0.05;
      gainNode2.gain.setValueAtTime(volume2, audioContext2.currentTime);
    }
  }, 20);
};

const stopAudio = () => {
  if (oscillator1) {
    oscillator1.stop();
    oscillator1 = null;
  }
  if (oscillator2) {
    oscillator2.stop();
    oscillator2 = null;
  }
  if (audioContext1) {
    audioContext1.close();
    audioContext1 = null;
  }
  if (audioContext2) {
    audioContext2.close();
    audioContext2 = null;
  }
  //canvas.removeEventListener("mousemove", handleMouseMove);
};
//--End Audio

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (gameActive) {
    drawCar();
    generateObstacles();
    updateObstacles();
    drawObstacles();
    //drawScore();

    score = (Date.now() - startTime) / 1000;
  }
  animationId = requestAnimationFrame(gameLoop);
}


function startGame() {
  if (!gameActive) {
    gameActive = true;
    startTime = Date.now();
    startButton.style.display = 'none';
    carSelection.style.display = 'none';
    previousScore.style.display = 'none';
    canvas.style.cursor = 'none';
    startAudio();
    gameLoop();
  }
}

function endGame() {
  gameActive = false;
  endTime = Date.now();
  stopAudio();
  cancelAnimationFrame(animationId);
  startButton.style.display = 'block';
  carSelection.style.display = 'flex';
  previousScore.style.display = 'block';
  previousScore.innerHTML = `Poprzedni wynik: ${Math.floor(score)}`;
  canvas.style.cursor = 'default';
  obstacles = [];
  car.y = canvas.height / 2 - 15;
  obstacleSpeed = 1.0;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

canvas.addEventListener('touchstart', moveCar);
canvas.addEventListener('touchmove', moveCar);
canvas.addEventListener('mousemove', moveCar);

startButton.addEventListener('click', startGame);

for (const carOption of carOptions) {
  carOption.addEventListener('click', () => {
    carImg.src = carOption.src;
    carImg.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //drawCar();
    };

    for (const option of carOptions) {
      option.classList.remove('selected');
    }
    carOption.classList.add('selected');
  });
}