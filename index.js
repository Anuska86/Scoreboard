function updateScore(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  let currentScore = parseInt(scoreElement.textContent);
  scoreElement.textContent = currentScore + points;
}
