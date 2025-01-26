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

	$("input[type=tel]").mask("+380(99)999-99-99");
});
