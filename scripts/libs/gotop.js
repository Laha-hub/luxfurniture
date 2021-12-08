"use strict";

const gotop = document.querySelector('.gotop');

gotop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

