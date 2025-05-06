
$(document).ready(function () {

    //Preloader

    setTimeout(function () {
        $('html').removeClass('page-load');
        $(".preloader").hide("slow");
        $('.loader').remove();
    }, 1000);

    //Mask Phone

    $("input[type=tel]").inputmask({"mask": "+38 (999) 999-99-99"});

    const menuBtn = document.querySelector('.btn-hamburger');
    const menuNav = document.querySelector('.header__nav');
    
        menuBtn.onclick = function() {
            menuNav.classList.toggle("header__nav--active"),
            menuBtn.classList.toggle("btn-hamburger--active");
    }

    //Accordion

    const fаqItems = document.querySelectorAll('.accordion__title');

    fаqItems.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
            el.nextElementSibling.classList.toggle('active');

            if (el.nextElementSibling.classList.contains('active')) {
                el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
            }

            else {
                el.nextElementSibling.style.maxHeight ='';
            }
        })
    });

    //Tabs

        const tabNavs = document.querySelectorAll(".tabs__item");
        const tabContents = document.querySelectorAll(".tabs-content");

        for (let i = 0; i < tabNavs.length; i++) {

        tabNavs[i].addEventListener("click", function(e){
            e.preventDefault();
            let activeTabAttr = e.target.getAttribute("data-tab");

            for (let j = 0; j < tabContents.length; j++) {
            let contentAttr = tabContents[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("tabs__item--active");
                tabContents[j].classList.add("tabs-content--active"); 
            } else {
                tabNavs[j].classList.remove("tabs__item--active");
                tabContents[j].classList.remove("tabs-content--active");
            }
            };
        });
        }
  

    // counterUp
    $('.header__numbers-item span').counterUp({
        delay: 10,
        time: 1000
    });


    //Slider

    $('.articles__list').slick({
        speed: 800,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        centerMode: true,
        appendArrows: $('.articles__heading'),
        prevArrow: '<button id="prev" type="button" class="btn btn--slide-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn--slide-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
    
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
    
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    //AOS
    AOS.init();

});