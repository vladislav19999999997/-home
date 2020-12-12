const homeTitle = document.querySelector('.home__title'),
    homeSubtitle = document.querySelector('.home__subtitle'),
    homeLateralmen = document.querySelector('.home__lateralmen');



window.addEventListener('scroll', function() {
    let showScrol = pageYOffset;
    

    if (showScrol > 10) {
        homeTitle.classList.add('title__scroll');
        homeSubtitle.classList.add('subtitle__scroll');
        homeLateralmen.style.top = 0;
    }else if (showScrol == 0){
        homeTitle.classList.remove('title__scroll');
        homeSubtitle.classList.remove('subtitle__scroll');
        homeLateralmen.style.top = -1000 + 'px';
    }
});
