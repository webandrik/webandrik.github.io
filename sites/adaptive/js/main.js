$('.footer__arrow').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});