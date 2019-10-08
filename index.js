$(document).ready(function () {
	
	$('.icon-scroll-to-top').addClass('hidden');

	$(document).scroll(function() {

	  var y = $(this).scrollTop();
	  if (y > 800) {
	  	$('.icon-scroll-to-top').fadeIn(1000).removeClass('hidden');
	    $('.icon-scroll-to-top').fadeIn();
	  } else {
	    $('.icon-scroll-to-top').fadeOut();
	  }
	});

	// on click of link, scroll to page location
	$(".links a, .name, .icon-scroll-to-top").click(function(e){
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
	});
})
