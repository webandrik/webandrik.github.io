//Hamburger

const buttonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

const btnArrow = document.querySelector(".menu__arrow");
      
buttonMenu.onclick = function() {
    menu.classList.toggle("menu--active"),
    buttonMenu.classList.toggle("btn-menu--active");
}

btnArrow.onclick = function() {
    btnArrow.nextElementSibling.classList.toggle('active');
}
