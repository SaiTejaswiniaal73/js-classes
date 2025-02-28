let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds
let completedSessions = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const applesContainer = document.getElementById("apples-container");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up!");
                isRunning = false;
                timeLeft = 25 * 60;
                updateDisplay();
                addAppleIcon();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

function addAppleIcon() {
    completedSessions++;
    const appleIcon = document.createElement("img");
    appleIcon.src = "path/to/apple-icon.png"; // Replace with the path to your apple icon image
    appleIcon.alt = "Apple Icon";
    appleIcon.classList.add("apple-icon");
    applesContainer.appendChild(appleIcon);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
