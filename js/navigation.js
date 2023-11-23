const burgerMenu = document.querySelector('.menu-burger-icon');
const menu = document.querySelector('.mobile-menu');

function openMenu() {
  burgerMenu.style.display = 'none';
  menu.style.display = 'flex';
}

burgerMenu.addEventListener('click', openMenu);

const closeMenubtn = document.querySelector('.menu-close');

function closeMenu() {
  burgerMenu.style.display = 'block';
  menu.style.display = 'none';
}

closeMenubtn.addEventListener('click', closeMenu);
