;(function($, undefined){
  particlesJS("particles-container", 
  {"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":80,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":6},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

  $(window).on('load',function(){
    $('.loader-wrap').fadeOut();
  });

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