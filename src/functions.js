const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const addNewGame = async (endpoint = '', gameName = '') => {
  const targetUrl = url + endpoint;
  const data = { name: gameName };
  const resp = await fetch(targetUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return (resp.json());
};

const getScore = async (id = '') => {
  const targetUrl = `${url}games/${id}/scores/`;
  const resp = await fetch(targetUrl);
  return resp.json();
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
const postScore = async (userName, userScore, id) => {
  const targetUrl = `${url}games/${id}/scores`;
  const data = { user: userName, score: userScore };
  const resp = await fetch(targetUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return resp.json();
};
export {
  url, addNewGame, getScore, addScore, postScore,
};