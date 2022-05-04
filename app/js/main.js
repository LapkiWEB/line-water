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
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '60px',
    responsive: [{
        breakpoint: 1601,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 965,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


  $('.article__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    centerMode: true,
    focusOnSelect: true,
    speed: 1000,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 1301,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
            centerMode: false,
        }
      },
    ]

  });




})