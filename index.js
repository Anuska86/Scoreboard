let timerInterval;
let gameStarted = false;

//Score
function updateScore(team, points) {
  if (!gameStarted) {
    alert("Start the timer to begin the game!");
    return;
  }

  const scoreEl = document.getElementById(`${team}-score`);
  let currentScore = parseInt(scoreEl.textContent);
  scoreEl.textContent = currentScore + points;
}

//Reset
function resetScores() {
  document.getElementById("home-score").textContent = "0";
  document.getElementById("guest-score").textContent = "0";
}

//Timer

function startTimer() {
  if (gameStarted) return;
  gameStarted = true;

  clearInterval(timerInterval);
  let timeLeft = 20;

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
      gameStarted = false;
      startBtn.disabled = false;
      startBtn.style.opacity = "1";

      const homeScore = parseInt(
        document.getElementById("home-score").textContent
      );
      const guestScore = parseInt(
        document.getElementById("guest-score").textContent
      );

      let winner = "";
      let colors = [];

      if (homeScore > guestScore) {
        winner = "HOME";
        colors = ["#ff3c3c", "#ff9c9c"];
      } else if (guestScore > homeScore) {
        winner = "GUEST";
        colors = ["#3c9cff", "#9ccfff"];
      } else {
        winner = "TIE";
      }

      if (winner !== "TIE") {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: colors,
        });
        alert(`${winner} team wins! 🎉`);
      } else {
        alert("It's a tie!");
      }
    }
  }, 1000);
}
