'use strict';

class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            loop: true,
            grabCursor: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                    scale: .9,
                },
            },
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 200,
            speed: 1000,
            breakpoints: {
                1024: { slidesPerView: 1.2 },
                1280: { slidesPerView: 1.4 },
                1920: { slidesPerView: 1.6 },
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false
        }, options);
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }

    stop() {
        this.swiper.autoplay.stop();
    }
}
