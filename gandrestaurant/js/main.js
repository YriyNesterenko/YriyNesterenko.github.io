$(function () {

	// Scroll up button

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
		} else {
		$('#toTop').fadeOut();
		}
		});
		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},700);
	});

	// Menu Hamburger

	$( ".cross" ).hide();
	$( ".menu-burger" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu-burger" ).slideToggle( 400, function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".menu-burger" ).slideToggle( 400, function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});

	// Slider

	$('.slider').slick({
		autoplay: true,
		dots: false,
		pauseOnHover: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
		responsive: [
		{
		  breakpoint: 769,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 577,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

});