import './style.css';
import {
  addNewGame, getScore, addScore, postScore,
} from './functions';

async function consumeAPI() {
  const gameData = await addNewGame('games/', 'java game');
  const id = gameData.result.split(':')[1].trim().split(' ')[0];
  const refresh = document.querySelector('.refresh');
  const submitBtn = document.querySelector('.submit-button');
  refresh.addEventListener('click', () => {
    async function userScores() {
      const resultScore = await getScore(id);
      const playersScore = resultScore.result;
      playersScore.forEach((element) => {
        addScore(element.user, element.score);
      });
    }
    userScores();
  });
  submitBtn.addEventListener('click', () => {
    const [userName, userScore] = Array.from(document.querySelectorAll('.user-input'));
    async function saveScore() {
      await postScore(userName.value, userScore.value, id);
    }
    saveScore();
  });
}
consumeAPI();
