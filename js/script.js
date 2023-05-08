"use strict"

const custumerSwiper = document.querySelector('.swiper-custumer');

if (custumerSwiper) {

const swiper = new Swiper('.swiper-custumer', {
  // Optional parameters
  autoHeight: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});
}