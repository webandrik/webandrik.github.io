const scrollToBtn = $("[data-scroll-to]");

if (scrollToBtn) {
  scrollToBtn.on('click', function (e) {
    e.preventDefault();

    const selector = $(this).attr('data-scroll-to');
    const target = $(selector);
    const dist = target.offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
  })
}