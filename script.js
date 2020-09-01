const toggleMenu = () => {
  document.querySelector('#open-menu').classList.toggle('mobile');
  document.querySelector('#close-menu').classList.toggle('mobile');
  document.querySelector('.header-links').classList.toggle('mobile');
}