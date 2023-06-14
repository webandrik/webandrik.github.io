;(function($, undefined){

  new WOW().init();

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

  //   ProgressBar

  var waypoint = new Waypoint({

    element: document.getElementsByClassName('skill'),
    handler: function(direction) {
      
      $('.skill-progress').each(function() {           
        $(this).animate({ width: $(this).attr('data-progress') + '%' }, { easing: 'linear' });
      });

      //this.destroy()
    },
    offset: '55%'
  });

// Contact Form Handler

$('#submit').on('click', function(e){
    e.preventDefault();

    let f_name = $('#name');
    let f_email = $('#email');
    let f_subject = $('#subject');
    let f_body = $('#body');
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
          alert ('Сообщение успешно отправлено!');
        },
		    error: function(error) {
			   console.log(error);
        }
      });
    }
	else if(!email_test(f_email)) {
	  alert('Введите правильный e-mail');
	}
    else {
      alert('Не заполнены поля.');
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

$('.nav').slicknav({
  appendTo: '.header',
  label: ''
});

// Scroll Link  Handler

$('.js-scroll-link').on('click', function(e) {
  e.preventDefault();
  var $this_el = $(this);
  $('.slicknav_btn').removeClass('slicknav_open');
  $('.slicknav_btn').trigger('click');
  $('html, body').stop().animate({
      scrollTop: $($this_el.attr('href')).offset().top - 0
  }, 1000);
});


})(jQuery);