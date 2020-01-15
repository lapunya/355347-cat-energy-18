var nav = document.querySelector('.nav');
var toggle = document.querySelector('.nav__toggle');
var navList = document.querySelector('.nav__list');
var slideBefore = document.querySelector('.example__slide-before');
var slideAfter = document.querySelector('.example__slide-after');
var buttonBefore = document.querySelector('.example__button--before');
var buttonAfter = document.querySelector('.example__button--after');

nav.classList.remove('nav--nojs');

toggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    navList.classList.add('nav__list--opened');
    toggle.classList.add('nav__toggle--crossline');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    navList.classList.remove('nav__list--opened');
    toggle.classList.remove('nav__toggle--crossline');
  }
});

buttonBefore.addEventListener('click', function () {
  slideAfter.classList.remove('example__slide--full');
  slideBefore.classList.remove('example__slide--closed');
  slideBefore.classList.add('example__slide--full');
  slideAfter.classList.add('example__slide--closed');
});

buttonAfter.addEventListener('click', function () {
  slideBefore.classList.remove('example__slide--full');
  slideAfter.classList.remove('example__slide--closed');
  slideAfter.classList.add('example__slide--full');
  slideBefore.classList.add('example__slide--closed');
});
