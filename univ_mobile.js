
(function(){
  const top = document.createElement('header');
  top.className = 'm-top';
  top.innerHTML = `<button class="m-menu" aria-label="${lang==='ko'?'메뉴 열기':'Open menu'}" onclick="document.body.classList.add('m-open')"><i data-lucide="menu"></i></button>
    <a class="m-logo" href="#home"><svg width="76" height="16" viewBox="0 0 76 16" fill="none"><use href="#clipoLogo"/></svg><span class="sb-logo-tag">University</span></a>`;
  const dim = document.createElement('div');
  dim.className = 'm-dim';
  dim.onclick = () => document.body.classList.remove('m-open');
  const main = document.getElementById('v-home');
  main.parentNode.insertBefore(top, main);
  main.parentNode.insertBefore(dim, main);
  
  document.querySelector('.sb').addEventListener('click', ev => { if (ev.target.closest('.si, .sc, .sb-logo')) document.body.classList.remove('m-open'); });
  window.addEventListener('hashchange', () => document.body.classList.remove('m-open'));
  lucide.createIcons();
})();
