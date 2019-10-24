$(function () {

  // Preloader

  var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');


	// Smoth scrolling

	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

  // Animate

    $(window).scroll(function() {
        $('.benef-slider').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+100) {
                $(this).addClass("fadeInRight");
            }
        });
        $('.comments__faces').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass("fadeInRightBig");
            }
        });
        $('.comments-slider').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+250) {
                $(this).addClass("fadeInLeft");
            }
        });
        $('.wrap-input').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

	// Comments-slider

    $('.comments-slider').slick({
   		dots: false,
   		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></button>'
 	 });

	// Benefits-slider

    var $slider = $('.benef-slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');
      
      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
      };

      $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });

      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

      $slider.slick({
   		dots: false,
   		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></button>'
 	 });
    }

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