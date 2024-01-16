window.onload = function () {
    
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function (e) {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
        }
        else {
            this.classList.add('is-active');
        }
    });

    $('#scroller').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
};