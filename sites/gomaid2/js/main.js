const wow = new WOW({
    animateClass: "animated",
    offset: 50,
  });
wow.init();

$('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: '.about__thumb',
  });

  $('.about__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.about__slider',
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
          breakpoint: 800,
          settings: "unslick"
      }
    ]
});

const buttonHamburger = document.querySelector(".hamburger"),
      pageElement = document.querySelector("html"),
      mainMenu = document.querySelector(".menu__list"),
      menuLink = document.querySelectorAll(".menu__link");

buttonHamburger.onclick = function () {
        pageElement.classList.toggle('menu-open');
        mainMenu.classList.toggle("menu__list--active");
        buttonHamburger.classList.toggle("hamburger--active");
}

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', menuClick);
}

function menuClick() {
    console.log('click');
    pageElement.classList.remove("menu-open");
    mainMenu.classList.remove("menu__list--active");
    buttonHamburger.classList.remove("hamburger--active");
}

$(document).ready(function () {
  $("#phone").inputmask({"mask": "+38 (999) 999-99-99"});
});