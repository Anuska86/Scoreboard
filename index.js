//Score
function updateScore(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  let currentScore = parseInt(scoreElement.textContent);
  scoreElement.textContent = currentScore + points;
}

//Reset
function resetScores() {
  document.getElementById("home-score").textContent = "0";
  document.getElementById("guest-score").textContent = "0";
}

//Timer
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
  let timeLeft = 60;
  document.getElementById("time").textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}
