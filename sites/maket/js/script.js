window.onload = function () {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function (e) {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
        }
        else {
            this.classList.add('is-active');
        }
    }) 
};