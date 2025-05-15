 //Accordion

const fаqItems = document.querySelectorAll('.works__item');

fаqItems.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('works__item--active');
        //el.nextElementSibling.classList.toggle('active');

        if (el.classList.contains('works__item--active')) {
            el.style.maxHeight = el.scrollHeight + parseInt(getComputedStyle(el).paddingBottom) + 'px';
        }

        else {
            el.style.maxHeight ='';
        }
    })
});

//Hamburger

const buttonMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
      
buttonMenu.onclick = function() {
    menu.classList.toggle("menu--active"),
    buttonMenu.classList.toggle("btn-menu--active")
}