$(function () {
  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');
    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');
    }
  }));


  $('.questions__item-title').on('click', (function () {
    $(this).next('.questions__item-text').slideToggle();
  }));


  $('.reviews__slider__inner').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: true,
        arrows: false,
      }
    }]
  });

  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-99-99");
  });
})


