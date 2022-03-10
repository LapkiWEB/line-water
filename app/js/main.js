$(function () {
  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');
      // $('html, body').css('overflow', 'hidden');
    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');
      // $('html, body').css('overflow', 'hidden');
    }
  }));
})