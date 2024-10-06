const buttonHamburger = document.querySelector(".hamburger"),
      pageElement = document.querySelector("html"),
      mainMenu = document.querySelector(".menu__list");

buttonHamburger.onclick = function () {
        pageElement.classList.toggle('menu-open');
        mainMenu.classList.toggle("menu__list--active");
        buttonHamburger.classList.toggle("hamburger--active");
}