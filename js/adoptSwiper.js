
$(function () {

  if ($(window).width() <= 576 && $(window).height() <= 720) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1.35,
      spaceBetween: 16,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    $(".button").hide()
  } else if ($(window).width() <= 576) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1.5,
      spaceBetween: 16,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    $(".button").hide()
  } else if ($(window).width() <= 768 && $(window).width() > 576) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if ($(window).width() <= 1024 && $(window).width() > 768) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})


