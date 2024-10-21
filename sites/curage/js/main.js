function menuOpen(el) {
    
    const targetEl = $(el).closest('.has-submenu').index();

    $('.menu-list>li').each(function (index, value) {
        if (index !== targetEl) {
            $(value).find('.submenu').removeClass('open'); 
        }
    });

    $(el).closest('.has-submenu').find('.submenu').toggleClass('open');
    
}

$(document).ready(function () {
    
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        speed: 600,
        arrows: false,
        autoplay: true
    });
    
    $('#slider-1, #slider-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
        {
        breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });

    $(".tours").tabs();

    $("#phone").inputmask({"mask": "+38 (999) 999-99-99"});
    
    $('.form-control-select').niceSelect();

    //Обрабатываем мобильное меню
  
    $('.header-burger').click(function (event) {
        $('.has-submenu').append('<span onclick="menuOpen(this)" class="js-submenu"></span>');
        $('.header-burger, .header-top, .header-top-wrap').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu a').click(function (event) {
       
        $('body').removeClass('lock');
        $('.header-burger, .header-top, .header-top-wrap').removeClass('active');
        $(event.target).closest('.submenu').removeClass('open');

    })


});
