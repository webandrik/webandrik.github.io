;(function($, undefined){
  //Begin Main Code

  // Add Events
  $(window).on('load',function(){
    $('body').css('overflow', 'auto');
    $('.loader').fadeOut();
  });
  $(window).scroll(function() {
	
	var distance = $(this).scrollTop();

	$(".header__photo img").css({
		"transform" : "translate(0%, -"+distance/5 + "%"
	});
	
  });
  $('.hamburger-btn').on('click', function(event) {
    $('.hamburger-btn').toggleClass('open');
    $('body').toggleClass('menu-open');
    $('.main-menu').toggleClass('is-open');
  });
  $('.js-scroll-link').on('click', function(event) {
    event.preventDefault();
    var $this_el = $(this);
    $('html, body').stop().animate({
        scrollTop: $($this_el.attr('href')).offset().top - 0
    }, 1000);
  });
  
  $('.scroll-down').on('click', function(e){
  e.preventDefault();
  let distance = $('.about').offset().top;
  jQuery('html, body').stop().animate({
					scrollTop: distance
				}, 500);
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


  $('#submit').on('click', function(e){
    e.preventDefault();
	//if(email_test(document.getElementById('email'))) {alert('Валидно!');}
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
			console.log('success');
          $('.form-contacts')[0].reset();
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

  // Init Plugins

  AOS.init();

  let mixer = mixitup('.portfolio');

  $('.portfolio').on('mixEnd',function(){
    if(AOS){ AOS.refresh() }
  });

  // Functions

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

})(jQuery);