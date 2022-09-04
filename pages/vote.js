import { data } from '../data/data.js';

function renderVote() {
  sessionStorage.setItem('current', 'vote');
  const all = document.querySelectorAll('.nav_list > a');
  all.forEach((el) => el.classList.remove('active_item'));

  const vote = document.getElementById('vote');
  vote.classList.add('active_item');

  const content = document.querySelector('.wrapper');
  content.innerHTML = `
  <div class='headerVotes'>
    <h1>Proposals</h1>
    <button class="createProposals">Create Proposals</button>
  </div>
  <div class='headerVotes'>
    <h1>Show Cancelled</h1>
    <button class="showProposals"><span id = 'radio' class="radioShow"></span></button>
  </div>
  <div class = 'proposals'> 

  </div>
  `;

  const wrapper = document.querySelector('.proposals');
  const brandNew = data.filter((el) => el.solution !== 'Canceled');

  function renderData(data) {
    data.forEach((el) => {
      const div = document.createElement('a');
      div.classList.add('prop-item');

      const span1 = document.createElement('span');
      span1.classList.add('prop-item-1');
      span1.innerText = el.id;

      const span2 = document.createElement('span');
      span2.classList.add('prop-item-2');
      span2.innerText = el.label;

      const span3 = document.createElement('span');
      span3.classList.add('prop-item-3');
      span3.innerText = el.solution;

      if (el.solution === 'Executed') span3.classList.add('green');
      else if (el.solution === 'Defeated') span3.classList.add('red');
      else span3.classList.add('cancelled');

      div.appendChild(span1);
      div.appendChild(span2);
      div.appendChild(span3);

      wrapper.appendChild(div);
    });
  }

  renderData(brandNew);

  const but = document.querySelector('.showProposals');
  const rad = document.querySelector('#radio');

  but.addEventListener('click', () => {
    rad.classList.toggle('radioShow');
    rad.classList.toggle('radioShowActive');

    console.log(rad.classList.value);

    if (rad.classList.value === 'radioShowActive') {
      wrapper.innerHTML = '';
      renderData(data);
    } else {
      wrapper.innerHTML = '';
      renderData(brandNew);
    }
  });
}

export default renderVote;
