$(document).ready(function () {


    $('.footer__arrow').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
    });

    const buttonClose = document.querySelector('.hamburger');
    const menuActive = document.querySelector('.header__row');
    
    buttonClose.onclick = function () {
        menuActive.classList.toggle('header__row--openmenu');
        buttonClose.classList.toggle('hamburger--open');
    }


});

