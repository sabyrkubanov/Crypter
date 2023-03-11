const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {


        450: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
