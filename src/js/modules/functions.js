export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

export function toggleMenuMobile() {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');
    const html = document.documentElement;
    const arrMenuLinks = document.querySelectorAll('.header__menu-link');
    if (button) {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        nav.classList.toggle('active');
        html.classList.toggle('menu-open');
      });
    }
    arrMenuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        button.classList.remove('active');
        nav.classList.remove('active');
        html.classList.remove('menu-open');
      });
    });
  });
}
