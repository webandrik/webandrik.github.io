const fаqItems = document.querySelectorAll('.faq__title');

fаqItems.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        el.nextElementSibling.classList.toggle('active');

        if (el.nextElementSibling.classList.contains('active')) {
            el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
        }

        else {
            el.nextElementSibling.style.maxHeight ='';
        }
    })
});