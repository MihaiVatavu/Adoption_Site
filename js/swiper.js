var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

