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

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');

  }));


 $('.reviews__slider__inner').slick();


})

 