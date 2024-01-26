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
    
});

