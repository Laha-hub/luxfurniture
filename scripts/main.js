'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const main = new Main;
});



class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set setObservers(val) {
        this._observers.push(val);
    }

    get getObservers() {
        return this._observers;
    }

    _init() {
        new MobileMenu;
        this.hero = new HeroSlider('.swiper');
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _titleAnimation(el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTitleAnimation(el);
            ta.animate();
        }
    }

    _inviewAnimation(el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, isIntersecting) {
        if(isIntersecting) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _sideAnimation(el, isIntersecting) {
        if(isIntersecting) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    _toggleSlideAnimation(el, isIntersecting) {
        if(isIntersecting) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _destroyObservers() {
        this.getObservers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.setObservers = new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), { once: false });
        this.setObservers = new ScrollObserver(".cover-slide", this._inviewAnimation, { rootMargin: "-100px 0px" });
        this.setObservers = new ScrollObserver(".appear", this._inviewAnimation, { rootMargin: "-50px 0px" });
        this.setObservers = new ScrollObserver(".tween-animate-title", this._titleAnimation, { rootMargin: "-50px 0px" });
        this.setObservers = new ScrollObserver(".swiper", this._toggleSlideAnimation.bind(this), { once: false });
        this.setObservers = new ScrollObserver("#main-content", this._sideAnimation.bind(this), { once: false, rootMargin: "-400px 0px" });
    }
}


