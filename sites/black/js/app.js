 //Accordion

const fаqItems = document.querySelectorAll('.works__item');

fаqItems.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('works__item--active');

        //if mobile menu
        if (getComputedStyle(document.querySelector('.btn-menu')).display == 'block') {
            el.querySelector('.works__image-wrap').classList.toggle('works__image-wrap--active');
            el.querySelector('.works__image-pic').classList.toggle('works__image-pic--active');
            el.querySelector('.works__desc').classList.toggle('works__desc--active');
            el.querySelectorAll('.works__desc-line').forEach(item => {
                item.classList.toggle('works__desc-line--active');
            })
        }
       

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