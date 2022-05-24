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
        breakpoint: 1321,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1031,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
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
          slidesToShow: 3,
         centerMode: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
         centerMode: false,
        }
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
        {
          breakpoint: 501,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
            dots: true,
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



