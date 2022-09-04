function renderSwap() {
  sessionStorage.setItem('current', 'swap');
  const all = document.querySelectorAll('.nav_list > a');
  all.forEach((el) => el.classList.remove('active_item'));

  const swap = document.getElementById('swap');
  swap.classList.add('active_item');

  const content = document.querySelector('.wrapper');
  content.innerHTML = `<div class="content">
  <div class="header_swap">
      <p>Swap</p>
      <i class="fa-solid fa-gear"></i>
  </div>
  <div class="firstblock">
      <input id='input1' type="number" inputmode="decimal" autocomplete="off" autocorrect="off" type="text"
          pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false"
          value="">
      <div class="token">
          <div class="buttonText">CREDITS</div>
          <img src="img/logo/AleoLogo.png" alt="AleoToken">
      </div>
      <div id="balance1" class="balance"></div>
  </div>
  <div class="secondblock">
      <input id='input2' type="number" inputmode="decimal" autocomplete="off" autocorrect="off" type="text"
          pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false"
          value="">
      <div class="token">
          <div class="buttonText">ETH</div>
          <img src="img/logo/eth.png" alt="ETH">
      </div>
      <div id="balance2" class="balance"></div>
  </div>
  <div class="valueOf"></div>
  <button>
      <p>Swap</p>
  </button>
</div>
`;

  const input1 = document.querySelector('#input1');
  const input2 = document.querySelector('#input2');

  const balance1 = document.querySelector('#balance1');
  const balance2 = document.querySelector('#balance2');

  const valueOf = document.querySelector('.valueOf');

  input1.onchange = (event) => {
    let timer = setInterval(() => {
      balance1.innerText = `$` + event.target.value * 4;
      input2.value = input1.value * 0.004;
      balance2.innerText = `$` + (input2.value * 1000 - 5);
      valueOf.innerText = `1 ETH = 0.004 CREDITS`;

      if (input1.value < 5) balance2.innerText = 'Cheap deal';
    }, 100);

    if (event.target.value === '0' || null || '') clearInterval(timer);
  };
}

export default renderSwap;
