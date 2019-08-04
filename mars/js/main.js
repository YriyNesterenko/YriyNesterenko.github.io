$(function () {

	// Preloader

	var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	// Menu burger

	$(".sidemenu").square_menu({
	flyDirection: "bottom",
	button: "&#9776;",
	animationStyle: "vertical",
	closeButton: "&#10006;"
	});

  	// Smoth scrolling

	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 700);
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

	// arcticModal

	$('.buy').click(function (e) {
	e.preventDefault ();
	$('#exampleModal').arcticmodal();
	});
	
});
