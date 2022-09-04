import renderPool from './pages/pool.js';
import renderSwap from './pages/swap.js';
import renderVote from './pages/vote.js';

const pool = document.getElementById('pool');
pool.onclick = renderPool;

const swap = document.getElementById('swap');
swap.onclick = renderSwap;

const vote = document.getElementById('vote');
vote.onclick = renderVote;

window.onload = function () {
  if (!sessionStorage.getItem('current')) {
    renderSwap();
  }

  if (sessionStorage.getItem('current') === 'swap') {
    renderSwap();
  } else if (sessionStorage.getItem('current') === 'pool') {
    renderPool();
  } else {
    renderVote();
  }
};
