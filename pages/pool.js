function renderPool() {
  sessionStorage.setItem('current', 'pool');
  const all = document.querySelectorAll('.nav_list > a');
  all.forEach((el) => el.classList.remove('active_item'));

  const pool = document.getElementById('pool');
  pool.classList.add('active_item');

  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = `
    <div class='headerPools'>
    <h1>Pools</h1>
    <button class="createPool">Create Pool</button>
    </div>

    <div class='poolInfo'>
      <h3>Your active V3 liquidity positions will appear here.</h3>
      <button>Connect a wallet</button>
    </div>
  `;
}

export default renderPool;
