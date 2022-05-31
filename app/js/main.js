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


 
 $('.questions__item').on('click', (function () {
   $(this).find('.questions__item-text').show(500);
   $(this).siblings().find('.questions__item-text').hide(500);

 }));


  $('.reviews__slider__inner').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    infinite: true,
    speed: 900,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 500,
      settings: {
        fade: false,
        speed: 200,
        dots: true,
        arrows: false,
      }
    }]
  });

  // jQuery(function ($) {
  $("#phone").mask("+7 (999) 999-99-99");
  // });



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 501,
        settings: {
           slidesToShow: 3,
          dots: true,
          arrows: false,
        }
      },
    ]
  });



})


// window.addEventListener('DOMContentLoaded', function () {



const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});

// });