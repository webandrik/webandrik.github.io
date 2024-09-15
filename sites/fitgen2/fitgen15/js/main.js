const swiperTwo = new Swiper('.testimonials__slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    grabCursor: true,
});

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(endtime) {
    
    const daysSpan = document.querySelectorAll('.timer__days');
    const hoursSpan = document.querySelectorAll('.timer__hours');
    const minutesSpan = document.querySelectorAll('.timer__minutes');
    const secondsSpan = document.querySelectorAll('.timer__seconds');
    
    function updateClock() {
      const t = getTimeRemaining(endtime);
      
      for (let i = 0; i < daysSpan.length; i++) {
        
        daysSpan[i].innerHTML = t.days;
        hoursSpan[i].innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan[i].innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan[i].innerHTML = ('0' + t.seconds).slice(-2);
       
      }
      
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock(deadline);