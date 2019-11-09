var mySwiper = new Swiper('#mySwiper', {

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}     