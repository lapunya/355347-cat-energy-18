var nav = document.querySelector('.nav');
var toggle = document.querySelector('.nav__toggle');
var navList = document.querySelector('.nav__list');

nav.classList.remove('nav--nojs');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    navList.classList.add('nav__list--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    navList.classList.remove('nav__list--opened');
  }
})
