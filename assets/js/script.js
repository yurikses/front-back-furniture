const menuBurger = document.querySelector('.navigation-burger-button');
const menu = document.querySelector('.side-menu');
const upButton = document.querySelector('.up-mobile-button');
menuBurger.addEventListener('click', (e) => {
  toggleMenu()
})

upButton.addEventListener('click', (e) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

function toggleMenu() {
  menu.classList.toggle('side-active');
  //document.body.style.overflow = menu.classList.contains('side-active') ? 'hidden' : 'auto';
}

document.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    menu.classList.remove('side-active');
    //document.body.style.overflow = 'auto';

  }
})

document.addEventListener('scroll', (e) => {
  upButton.classList.add('hidden')
  if(document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < document.documentElement.offsetHeight-1500 ){
    upButton.classList.remove('hidden')
  }
})

