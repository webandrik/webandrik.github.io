window.onload = function () {
    const hamburger = document.querySelector('.hamburger');
    const menuActive = document.querySelector('.header__row');

    hamburger.onclick = function () {
            menuActive.classList.toggle('header__row--openmenu');
            hamburger.classList.toggle('hamburger--open');
    }
}

