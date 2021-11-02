// carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // center: true,
        margin: 20,
        loop: true,
        nav: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            577:{
                items: 2,
            },
            770:{
                items:3,
                center: true
            },
            1200:{
                items:4,
            },
            0: {
                items: 1,
            }
        }

    });
    
  });
// burger
const burger = document.querySelector('.hamburger'),
      menu =   document.querySelector('.header__links.mobile');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

// counter
if(document.querySelector('#about')){
  var target = $('#numbers');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      $('#one').animate({ num: 7 }, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num ).toFixed(0)
      }
    });
    $('#two').animate({ num: 8 }, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num ).toFixed(0)
      }
    });
    $('#three').animate({ num: 46  }, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num  ).toFixed(0)
      }
    });
    $('#four').animate({ num: 6 - 1  }, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num + 1).toFixed(0)
      }
    });
      $('#five').animate({ num: 580 }, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num ).toFixed(0)
      }
    });
    }
  });
} 



// accordeon

const accordeon = document.querySelectorAll('.faq__accordeon-item');

accordeon.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');
  })
})

// popup

const trigger = document.querySelectorAll('.header__link.last'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close');

trigger.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
  })
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
})

//animate
  AOS.init();

  AOS.init({
    duration: 1200,
    offset: 100
  });

// scroll

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let $this = $(this),
   blockId = $this.data('scroll'),
   blockOffset = $(blockId).offset().top;

  $("html, body").animate({
   scrollTop: blockOffset
  }, 500);
 });

// language 

const langBut = document.querySelectorAll('.header__language');


langBut.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  })
});

