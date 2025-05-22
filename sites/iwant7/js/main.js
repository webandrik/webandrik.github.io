//Hamburger

const buttonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
      
buttonMenu.onclick = function() {
    menu.classList.toggle("menu--active"),
    buttonMenu.classList.toggle("btn-menu--active");
}