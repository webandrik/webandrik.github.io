$(function () {
  
  //Init AOS
  new WOW().init();


  //Init Swiper

  const swiper = new Swiper('.swiper', {
    speed: 1500,
    spaceBetween: 0,
    parallax: true,
    autoplay: true,
    loop: true,

    on: {
      init: function() {
        let swiper = this;
        swiper.slides.forEach(function(item, index) {
          $(item).find('.img-box').attr({'data-swiper-parallax': +(0.85 * swiper.width).toFixed(2),});
        });
      },
      resize: function() {
        this.update();
      }
    },
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //Hamburger

  const hamburger = $('.hamburger');
  
  hamburger.on('click', function () {
   $(this).toggleClass('active');
   $('body').toggleClass('lock');
  });

  // Scroll Link  Handler

  $('.js-scroll-link').on('click', function(e) {
    e.preventDefault();
    const $this_el = $(this);

    hamburger.trigger('click');
    $('html, body').stop().animate({
        scrollTop: $($this_el.attr('href')).offset().top - 0
    }, 500);

  });

  const waypoint = new Waypoint({

    element: document.getElementsByClassName('skill'),
    handler: function(direction) {
      
      $('.skill-progress').each(function() {           
        $(this).animate({ width: $(this).attr('data-progress') + '%' }, { easing: 'linear' });
      });

      this.destroy()
    },
    offset: '55%'
  });

  tns({
    container: '.testimonial-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    mouseDrag: true,
    gutter: 0,
    nav: true,
    controls: false,
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1170: {
            items: 1,
        }
    }
  });

  // Scroll Top

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#to-top').fadeIn();
    }else{
      $('#to-top').fadeOut();
    }
  });

  $('#to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  // Contact Form

  $('#submit').on('click', function(e){
    e.preventDefault();

    const f_name = $('#name');
    const f_email = $('#email');
    const f_subject = $('#subject');
    const f_body = $('#body');

    if(validateInput($('#name')) && validateInput($('#email')) && email_test(f_email)  && validateInput($('#subject')) && validateInput($('#body'))) {
		
      $.ajax({
		  
        url: 'sendmail.php',
        method: 'POST',
        dataType: 'JSON',
        data: {
          name: f_name.val(),
          email: f_email.val(),
          subject: f_subject.val(),
          body: f_body.val()
        },
        success: function(response) {
		
          $('.contact-form')[0].reset();
          alert ('Message sent successfully!');
        },
		    error: function(error) {
			   console.log(error);
        }
      });
    }
	else if(!email_test(f_email)) {
	  alert('Please enter a correct email.');
	}
    else {
      alert('Please fill in the fields.');
    }
  });

  function validateInput(input) {
    if(input.val().trim()=='') {
      input.css('border', '1px solid red');
      return false;
    }
    else {
      input.css('border', '');
      return true;
    }
}

  function email_test(input) {
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())){
          return true;
      }
      
      else {
          input.css('border', '1px solid red');
          return false;
      }
  }

  //Preloader

  $(window).on('load', function () {
    $('.preloader').delay(300).fadeOut();
  });

});

