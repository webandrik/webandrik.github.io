$(function () {

  //Init Swiper

  const swiper = new Swiper('.swiper', {
    speed: 1500,
    spaceBetween: 0,
    parallax: true,
    autoplay: true,
    loop: true,

    on: {
      init: function() {
        let swiper = this;
        swiper.slides.forEach(function(item, index) {
          $(item).find('.img-box').attr({'data-swiper-parallax': +(0.85 * swiper.width).toFixed(2),});
        });
      },
      resize: function() {
        this.update();
      }
    },
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //Hamburger

  const hamburger = $('.hamburger');
  
  hamburger.on('click', function () {
   $(this).toggleClass('active');
   $('body').toggleClass('lock');
  });

  tns({
    container: '.testimonial-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    mouseDrag: true,
    gutter: 0,
    nav: true,
    controls: false,
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1170: {
            items: 1,
        }
    }
  });
    
});

