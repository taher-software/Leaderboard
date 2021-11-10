import './style.css';
import {
  addNewGame, getScore, addScore, postScore,
} from './functions';

const consumeAPI = async () => {
  const gameData = await addNewGame('games/', 'java game');
  const id = gameData.result.split(':')[1].trim().split(' ')[0];
  const refresh = document.querySelector('.refresh');
  const submitBtn = document.querySelector('.submit-button');
  refresh.addEventListener('click', () => {
    const userScores = async () => {
      const resultScore = await getScore(id);
      const playersScore = resultScore.result;
      const scoresContainer = document.querySelector('.players-scores');
      scoresContainer.innerHTML = '';
      playersScore.forEach((element) => {
        addScore(element.user, element.score);
      });
    };
    userScores();
  });
  submitBtn.addEventListener('click', () => {
    const [userName, userScore] = Array.from(document.querySelectorAll('.user-input'));
    const saveScore = async () => {
      await postScore(userName.value, userScore.value, id);
    };
    saveScore();
  });
};
consumeAPI();
