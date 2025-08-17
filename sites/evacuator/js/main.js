$(document).ready(function () {
    
    const buttonClose = document.querySelector('.hamburger');
    const menuActive = document.querySelector('.menu');

    buttonClose.onclick = function () {
        menuActive.classList.toggle('active');
        buttonClose.classList.toggle('active');
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
    });
});