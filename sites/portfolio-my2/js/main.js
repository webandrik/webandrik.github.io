$(function () {
    
    //Loader
    $('.preloader').delay(350).fadeOut('slow');

    //Клик по кнопке меню
    $('.burger').on('click', function () {

        

        if ($(this).hasClass('active')) {
            gsap.to('.menu', .6, { y: '-100%' });
        }
        else {
            gsap.to('.menu', .6, { y: 0 });
        }

        $(this).toggleClass('active');

    });


    //Клик по пункту меню Home
    $('.js-home, .logo').on('click', function () {
        $('.burger').removeClass('active');
        gsap.to('.menu', .6, { y: '-100%' });
        gsap.to('.header>div', 0, { display: "block" });
        gsap.to('.header-bottom', 0, { display: "flex" });
        gsap.to('.header', 0, { height: "auto", minHeight: "100vh" });
        gsap.to('.header-top', 0, { display: "flex" });
        gsap.to('.about', 0, { display: "none" });
        gsap.to('.contacts', 0, { display: "none" });
        gsap.to('.portfolio',0,{display:"none"});
    });

    //Клик по пункту меню About
    $('.js-about').on('click', function () {
        $('.burger').removeClass('active');
        gsap.to('.menu', .6, { y: '-100%' });
        gsap.to('.header>div', 0, { display: "none" });
        gsap.to('.header', 0, { height: "auto", minHeight: "auto" });
        gsap.to('.header-top', 0, { display: "flex" });
        gsap.to('.about', 0, { display: "block" });
        gsap.to('.contacts', 0, { display: "none" });
        gsap.to('.portfolio',0,{display:"none"});
    });

     //Клик по пункту меню Portfolio
     $('.js-portfolio').on('click', function () {
        $('.burger').removeClass('active');
        gsap.to('.menu', .6, { y: '-100%' });
        gsap.to('.header>div', 0, { display: "none" });
        gsap.to('.header', 0, { height: "auto", minHeight: "auto" });
        gsap.to('.header-top', 0, { display: "flex" });
        gsap.to('.about', 0, { display: "none" });
        gsap.to('.contacts', 0, { display: "none" });
        gsap.to('.portfolio',0,{display:"block"});
     });
    
    //Клик по пункту меню btn--portfolio
    $('.btn--portfolio').on('click', function () {
        $('.burger').removeClass('active');
        gsap.to('.header>div', 0, { display: "none" });
        gsap.to('.header', 0, { height: "auto", minHeight: "auto" });
        gsap.to('.header-top', 0, { display: "flex" });
        gsap.to('.about', 0, { display: "none" });
        gsap.to('.portfolio', 0, { display: "block" });
        gsap.to('.layer-transition', 0, { display: "block" });
        gsap.to('.layer-transition', 0, { y: '0' });
        gsap.to('.layer-transition', .6, { y: '-100%'});
     });

     //Клик по пункту меню Contacts
     $('.js-contacts').on('click', function () {
        $('.burger').removeClass('active');
        gsap.to('.menu', .6, { y: '-100%' });
        gsap.to('.header>div', 0, { display: "none" });
        gsap.to('.header', 0, { height: "auto", minHeight: "auto" });
        gsap.to('.header-top', 0, { display: "flex" });
        gsap.to('.about', 0, { display: "none" });
        gsap.to('.portfolio',0,{display:"none"});
        gsap.to('.contacts',0,{display:"block"});
     });
    
   
    
    $(window).on('mousemove', cursormover);
    const mycursor = $('.cursor');
    function cursormover(e){
    
        gsap.to( mycursor, {
          x : e.clientX ,
          y : e.clientY,
          stagger:.002
         })
    }

    $('a, .burger').hover(function () {
        gsap.to(mycursor, {
            scale: 1.4,
            opacity: 1
            });
        }, function () {
            gsap.to( mycursor, {
            scale:1,
            opacity: .6
            });
        }
    );

    

    
});

async function sendForm(e) {
    e.preventDefault();

    let response = await fetch('mail.php', {
        method: 'POST',
        body: new FormData(e.target)
    });

    if (response.ok) {
        let text = await response.text();
        console.log(text);
    }
}

document.querySelector('form').addEventListener('submit', sendForm);
