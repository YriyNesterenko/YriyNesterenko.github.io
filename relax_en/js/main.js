$(function () {

	// Preloader

	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // ArcticModal

	$('.btn__call_header, .btn__call_footer, .btn__call_burger').click(function (e) {
		e.preventDefault ();
		$('#exampleModal').arcticmodal();
	});

	// Smoth scrolling

	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 700);
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
});