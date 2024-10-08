const startBtn = document.getElementById('start-btn');
const messageDiv = document.getElementById('message');
const scarySound = document.getElementById('scary-sound');

startBtn.addEventListener('click', startGame);

function startGame() {
    messageDiv.textContent = "You're in a dark room. Suddenly, you hear a noise...";
    setTimeout(playScarySound, 2000);
}

function playScarySound() {
    scarySound.play();
    messageDiv.textContent = "A ghost appears! What will you do?";
    setTimeout(endGame, 5000);
}

function endGame() {
    messageDiv.textContent = "Game Over! You were caught by the ghost.";
    startBtn.style.display = "block";
}
