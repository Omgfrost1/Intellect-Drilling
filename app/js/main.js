$(function () {

  $('.reviews__slider').slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


   $('.portal__slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    prevArrow: '<button type = "button" class= "portal__prev"><img src="images/header/arrow-left.svg" alt="left arrow"> </button>',
    nextArrow: '<button type = "button" class= "portal__next"><img src="images/header/arrow-right.svg" alt="right arrow"> </button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
    $('.works__items').slick({
    dots: false,
    arrows: true,
    mobileFirst: true,
    prevArrow: '<button type = "button" class= "works__prev"><img src="images/works/arrow-left.svg" alt="left arrow"> </button>',
    nextArrow: '<button type = "button" class= "works__next"><img src="images/works/arrow-right.svg" alt="right arrow"> </button>',
     responsive: [
	    {
	    breakpoint: 769,
      settings: "unslick"      
	    }
    ]   
  });
  
  //  $(".header__menu-link, .portal__content-arrow, .footer a").on("click", function (e) {
  //   e.preventDefault();
  //   var id = $(this).attr('href'),
  //     top = $(id).offset().top;
  //   $('body,html').animate({ scrollTop: top }, 1500);
  // });

  // $('.header__menu-btn, .header__menu-link, .header__menu-item-btn').on('click', function () {
  //   $('body').toggleClass('menu__open');
  //   $('.header__menu-list').toggleClass('header__menu-list--active');
  // });

  // $('.answers__item-title').click(function (event) {
  //   if ($('.answers__item, .answers__top-item').hasClass('answers__only')){
  //     $('.answers__item-title').not($(this)).removeClass('active');
  //     $('.answers__item-text').not($(this).next()).slideUp(300);
  //   }
  //   $(this).toggleClass('active').next().slideToggle(300);
  // });

  // $('.answers__top-title').click(function (event) {
  //   $(this).toggleClass('active').next().slideToggle(300);
  // });

});

window.onscroll = function showHeader() {
  var header = document.querySelector('.header__top-inner-scroll');
  if (window.pageYOffset > 720) {
    header.classList.add('header__top-fixed');

  }
  else {
    header.classList.remove('header__top-fixed');
  }
}

const anchors = document.querySelectorAll('.portal__content-arrow')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


function showMenu() {
  $('body').toggleClass('menu__open');
  $('.header__menu-list').toggleClass('header__menu-list--active');
}


document.querySelectorAll('.answers__item-title, .answers__top-title').forEach((el) => {
  el.addEventListener('click', () => {
     let content = el.nextElementSibling;
     if(content.style.maxHeight) {
        document.querySelectorAll('.answers__item-text, .answers__text').forEach((el) => el.style.maxHeight = null)
     } else {
       document.querySelectorAll('.answers__item-text, .answers__text').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight +'px'
     }
  })
})