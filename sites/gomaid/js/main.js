const buttonHamburger = document.querySelector(".hamburger"),
      pageElement = document.querySelector("html"),
      mainMenu = document.querySelector(".menu__list"),
      menuLink = document.querySelectorAll(".menu__link");

buttonHamburger.onclick = function () {
        pageElement.classList.toggle('menu-open');
        mainMenu.classList.toggle("menu__list--active");
        buttonHamburger.classList.toggle("hamburger--active");
}

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', menuClick);
}

function menuClick() {
    console.log('click');
    pageElement.classList.remove("menu-open");
    mainMenu.classList.remove("menu__list--active");
    buttonHamburger.classList.remove("hamburger--active");
}