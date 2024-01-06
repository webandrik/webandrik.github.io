(function($){
  $(window).on('load', function(){
    var tempScrollTop, currentScrollTop = 0;
    var header = $('.header');

    function onScroll(){
      var windowHeight = $(window).height();

      currentScrollTop = $(window).scrollTop();

      if (currentScrollTop > windowHeight+100 ){
          header.addClass("is-fixed");
      } else if ( currentScrollTop == 0){
          header.removeClass("is-fixed");
      }
      if (tempScrollTop < currentScrollTop ){
          header.removeClass('show-header');
      }
      else if (tempScrollTop > currentScrollTop ){
          header.addClass('show-header');
      }
      tempScrollTop = currentScrollTop;
    }
    document.addEventListener('DOMContentLoaded', onScroll)
    $(window).on('scroll', onScroll);
  });
})(jQuery);