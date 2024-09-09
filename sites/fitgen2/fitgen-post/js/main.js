const swiperTwo = new Swiper('.testimonials__slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});