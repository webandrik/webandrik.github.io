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

    // $('.menu__item').on('touchstart touchend', function(e) {
    //     e.preventDefault();
    //     //console.log('mmm');
    //     if (e.target.className == 'menu__arrow') {
    //         console.log('arrow');
    //     }
    // });

    $('.menu__arrow').on('click', function (e) {
        e.preventDefault();
        console.log('mmm');
        $(this).parent().find('.menu__sub').toggleClass('menu__sub--open');
    });

});

