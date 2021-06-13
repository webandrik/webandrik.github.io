;(function($, undefined){
  //Begin Main Code

  // Add Events
  $(window).on('load',function(){
    $('body').css('overflow', 'auto');
    $('.loader').fadeOut();
  });
  $('.hamburger-btn').on('click', function(event) {
    $('.hamburger-btn').toggleClass('open');
    $('body').toggleClass('menu-open');
    $('.header__nav').toggleClass('is-open');
  });
  $('.js-scroll-link').on('click', function(event) {
    event.preventDefault();
    var $this_el = $(this);
    $('html, body').stop().animate({
        scrollTop: $($this_el.attr('href')).offset().top - 0
    }, 1000);
  });

  $('#submit').on('click', function(e){
    e.preventDefault();
    let f_name = $('#name');
    let f_email = $('#email');
    let f_subject = $('#subject');
    let f_body = $('#body');
    if(validateInput($('#name')) && validateInput($('#email')) && validateInput($('#subject')) && validateInput($('#body'))) {
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
          $('.form-contacts').reset();
          alert ('Сообщение успешно отправлено!');
        }
      });
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

})(jQuery);
