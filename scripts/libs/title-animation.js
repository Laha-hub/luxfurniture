'use strict';

class TitleAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTitleAnimation extends TitleAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            if(i === 0) {
                gsap.to(c, .6, {
                    ease: Linear.easeNone,
                    rotationY: 360 * 2,
                    opacity: 1,
                    color: 'teal',
                });
            } else {
                gsap.to(c, .3, {
                    ease: Linear.easeNone,
                    delay: (i * .02) + 0.6,
                    startAt: { x: '-50%', opacity: 0},
                    x: '0%',
                    opacity: 1
                });
            }

        });

    }
}
