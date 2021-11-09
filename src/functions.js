const addScore = () => {
  const newSCore = document.createElement('div');
  const playersScores = document.querySelector('.players-scores');
  const newScoreOrder = playersScores.children.length + 1;
  const [playerName, playerScore] = Array.from(document.querySelectorAll('.user-input'));
  newSCore.innerHTML = `<p>${playerName.value}: ${playerScore.value}`;
  newSCore.className = 'score';
  if (newScoreOrder % 2 === 0) newSCore.style.backgroundColor = 'rgb(221,221,221)';
  else newSCore.style.backgroundColor = '#fff';
  playersScores.appendChild(newSCore);
};
export default addScore;