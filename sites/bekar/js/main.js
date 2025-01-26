$(document).ready(function(){
	$(".slider__inner").owlCarousel({
	  items: 1,
	  nav: true,
	  autoplay: true,
	  loop: true,
	  autoplayHoverPause: true
	});
	$(".testimonials__slider").owlCarousel({
	  items: 3,
	  margin: 36,
	  nav: true,
	  autoplay: true,
	  loop: true,
	  autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	//To Top

	$('.to-top').click(function(){
		$('html, body').animate({scrollTop:0}, '300');
		return false;
	});

	$('.play-btn').click(function (e) {
		e.preventDefault();
        let src = $(this).attr('data-src')+'?autoplay=1';
        $('#videoModal').modal('show');
        $('#videoModal iframe').attr('src', src);
	});
	
	$('#videoModal button').click(function () {
        $('#videoModal iframe').removeAttr('src');
    });

	$("input[type=tel]").mask("+380(99)999-99-99");

	// Loder 
    $(function () {
        $('body').addClass('page-loaded');
    });
});
