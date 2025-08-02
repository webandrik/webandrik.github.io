$(document).ready(function () {

  
$.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 400,       // how long (in ms) the animation takes
    activeClass: 'menu__link--active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0          // offste (in px) for fixed top navigation
});
  
  const buttonHamburger = $(".hamburger"),
        mainMenu = $(".menu"),
        menuLink = $(".menu__link");

  buttonHamburger.on('click', function () {
    buttonHamburger.toggleClass("hamburger--active");
    mainMenu.toggleClass("menu--active");
  });

  menuLink.on('click', function () {
    if (buttonHamburger.hasClass('hamburger--active')) {
      buttonHamburger.removeClass("hamburger--active");
      mainMenu.removeClass('menu--active');
    }
  });


    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true
    });
  
   const toTop = $('.to-top');
  
    toTop.hide();  

   $(window).scroll(function () {
       if ($(this).scrollTop() > 1){  
         $('.header').addClass("header--sticky");
         }
         else{
         $('.header').removeClass("header--sticky");
        }
      if ($(this).scrollTop() > 100) {
        toTop.fadeIn();
      }else{
        toTop.fadeOut();
      }
    });

    toTop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  
    
  //Contact Form
  
  function validateInput(input) {
    console.log(input);
    
    if(input.val().trim()=='') {
      input.css('border', '1px solid #e79d92');
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
          input.css('border', '1px solid #e79d92');
          return false;
      }
  }

  $('.contact-form').on('submit', function(e){
    e.preventDefault();

    const f_name = $('#name');
    const f_email = $('#email');
    const f_subject = $('#subject');
    const f_body = $('#message');

    if(validateInput(f_name) && validateInput(f_email) && email_test(f_email)  && validateInput(f_subject) && validateInput(f_body)) {
		
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
		console.log(response);
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

  $(".preload").fadeOut(1500);
		
  AOS.init();

  $(window).stellar();
  
});