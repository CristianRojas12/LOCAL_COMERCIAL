document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  if (burgerMenu && menu) {
    burgerMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});
