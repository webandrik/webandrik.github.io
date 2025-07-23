//Hamburger

// const buttonMenu = document.querySelector(".btn-menu");
// const menu = document.querySelector(".menu");
      
// buttonMenu.onclick = function() {
//     menu.classList.toggle("menu--active"),
//     buttonMenu.classList.toggle("btn-menu--active")
// }

$(document).ready(function () {
  
  const buttonHamburger = $(".hamburger"),
        mainMenu = $(".menu"),
        menuLink = $(".menu__link");

  buttonHamburger.on('click', function () {
    buttonHamburger.toggleClass("hamburger--active");
    mainMenu.toggleClass("menu--active");
  });

  menuLink.on('click', function () {
    console.log('click menu open...');
    
    if (buttonHamburger.hasClass('hamburger--active')) {
      buttonHamburger.removeClass("hamburger--active");
      mainMenu.removeClass('menu--active');
    }
  });


    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true
    });
  
  const toTop = $('.to-top');
  
    toTop.hide();  

  $(window).scroll(function () {
       if ($(this).scrollTop() > 1){  
         $('header').addClass("header--sticky");
         }
         else{
         $('header').removeClass("header--sticky");
        }
      if ($(this).scrollTop() > 100) {
        toTop.fadeIn();
      }else{
        toTop.fadeOut();
      }
    });

    toTop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
		
  
});