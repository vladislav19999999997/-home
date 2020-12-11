const homeTitle = document.querySelector('.home__title'),
    homeSubtitle = document.querySelector('.home__subtitle'),
    homeLateralmen = document.querySelector('.home__lateralmen');



let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    homeTitle.classList.add('title__scroll');
    homeSubtitle.classList.add('subtitle__scroll');
    homeLateralmen.style.bottom = 0;
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
    window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
    });

    ticking = true;
    }
});