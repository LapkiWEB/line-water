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


  $('.reviews__slider__inner').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 500,
         settings: {
             dots: true,
             arrows: false,
         }
       }
     ]
  });


  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-99-99");
  });
})



  let inputs = document.querySelectorAll('.feedback__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.input__file-button-text').innerText = labelVal;
  });
}); 
