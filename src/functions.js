const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const addNewGame = (endpoint = '', gameName = '') => {
  const targetUrl = url + endpoint;
  const data = { name: gameName };
  return fetch(targetUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const getScore = (id = '') => {
  const targetUrl = `${url}games/${id}/scores/`;
  return fetch(targetUrl).then((resp) => resp.json());
};

const addScore = (user, score) => {
  const newSCore = document.createElement('div');
  const playersScores = document.querySelector('.players-scores');
  const newScoreOrder = playersScores.children.length + 1;
  newSCore.innerHTML = `<p>${user}: ${score}`;
  newSCore.className = 'score';
  if (newScoreOrder % 2 === 0) newSCore.style.backgroundColor = 'rgb(221,221,221)';
  else newSCore.style.backgroundColor = '#fff';
  playersScores.appendChild(newSCore);
};
const postScore = (userName, userScore, id) => {
  const targetUrl = `${url}games/${id}/scores`;
  const data = { user: userName, score: userScore };
  return fetch(targetUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};
export {
  url, addNewGame, getScore, addScore, postScore,
};