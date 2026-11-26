(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '開啟導覽選單');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? '關閉導覽選單' : '開啟導覽選單');
    nav.classList.toggle('is-open', willOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeMenu(); toggle.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
})();