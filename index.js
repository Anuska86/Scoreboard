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
  const timeEl = document.getElementById("time");
  const startBtn = document.querySelector(".timer button");

  timeEl.textContent = timeLeft;
  startBtn.disabled = true;
  startBtn.style.opacity = "0.6";

  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    timeEl.classList.add("updated");
    setTimeout(() => timeEl.classList.remove("updated"), 200);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      startBtn.disabled = false;
      startBtn.style.opacity = "1";
    }
  }, 1000);
}
