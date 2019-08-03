$(function () {

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

	// Slider

	$('.my-work').slick({
		autoplay: false,
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
		  breakpoint: 993,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
		});

});