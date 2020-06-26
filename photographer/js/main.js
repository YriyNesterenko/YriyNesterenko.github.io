$(function () {

	// Smoth scrolling

	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 700);
	});

	// Slick slider	

	$('.works-photo__slider, .works-video__slider').slick({
		autoplay: false,
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

	// Lightbox

	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false
    })

});