$(document).ready(function () {

 $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<img src="img/arrow-left.svg" alt="РџРѕРїРµСЂРµРґРЅС–Р№">',
      '<img src="img/arrow-right.svg" alt="РќР°СЃС‚СѓРїРЅРёР№">'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    },
    onInitialized: function (event) {
      const $carousel = $(event.target);

      $carousel.find('.owl-prev').attr({
        'aria-label': 'РџРѕРїРµСЂРµРґРЅС–Р№ СЃР»Р°Р№Рґ',
        'type': 'button'
      }).removeAttr('role');

      $carousel.find('.owl-next').attr({
        'aria-label': 'РќР°СЃС‚СѓРїРЅРёР№ СЃР»Р°Р№Рґ',
        'type': 'button'
      }).removeAttr('role');

      const $dots = $carousel.find('.owl-dot');
      $dots.each(function (index) {
        const isActive = $(this).hasClass('active');
        const label = isActive
          ? `РџРѕС‚РѕС‡РЅРёР№ СЃР»Р°Р№Рґ, СЃР»Р°Р№Рґ ${index + 1}`
          : `РџРµСЂРµР№С‚Рё РґРѕ СЃР»Р°Р№РґР° ${index + 1}`;
        $(this).attr('aria-label', label);
      });
    },
    onChanged: function (event) {
      const $carousel = $(event.target);
      const $dots = $carousel.find('.owl-dot');

      $dots.each(function (index) {
        const isActive = $(this).hasClass('active');
        const label = isActive
          ? `РџРѕС‚РѕС‡РЅРёР№ СЃР»Р°Р№Рґ, СЃР»Р°Р№Рґ ${index + 1}`
          : `РџРµСЂРµР№С‚Рё РґРѕ СЃР»Р°Р№РґР° ${index + 1}`;
        $(this).attr('aria-label', label);
      });
    }
  });

  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();

      var offset = $(window).width() < 991 ? 100 : 0;

      if (this.getAttribute('href') === '#contacts') {
        offset += 70;
      }

      $('html, body').animate({
        scrollTop: target.offset().top - offset
      }, 600);

      if ($('.dropdown-menu').hasClass('active')) {
        $('.dropdown-menu').removeClass('active');
        $('.menu-toggle').removeClass('active');
      }
    }
  });

  $('.logo').on('click', function () {
    window.location.href = '/';
  });

  $('.menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.dropdown-menu').toggleClass('active');
  });

  function equalizeServiceHeight() {
    var windowWidth = $(window).width();

    if (windowWidth > 991) {
      var maxHeight = 0;
      $('.service-height').css('height', 'auto');

      $('.service-height').each(function () {
        var height = $(this).outerHeight();
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      $('.service-height').css('height', maxHeight + 'px');
    } else {

      $('.service-height').css('height', 'auto');
    }
  }

  $(document).ready(equalizeServiceHeight);
  $(window).on('resize', equalizeServiceHeight);

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: formData,
      success: function (response) {

        $('#contactForm')[0].reset();

        $('#successModal').fadeIn();
      },
      error: function () {
        alert('РЎС‚Р°Р»Р°СЃСЏ РїРѕРјРёР»РєР° РїСЂРё РІС–РґРїСЂР°РІС†С– С„РѕСЂРјРё. РЎРїСЂРѕР±СѓР№С‚Рµ С‰Рµ СЂР°Р·.');
      }
    });
  });

  $('.popup-close').on('click', function () {
    $('#successModal').fadeOut();
  });

  $('#successModal').on('click', function (e) {
    if ($(e.target).is('#successModal')) {
      $(this).fadeOut();
    }
  });

});