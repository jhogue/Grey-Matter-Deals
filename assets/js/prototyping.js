$(window).load(function() {

	// Development Only scripts

  $(window).on('resize', showSize);
	showSize();

	function showSize() {
		$('#size').html( $(window).width() + 'px x ' + $(window).height() + 'px');
	}
	
	
	// Same idea as window size, but applied to individual divs
	$(window).on('resize', showRatio);
	showRatio();
	
	function showRatio() {
		var obj = $('.js-ratio');
		$.each( obj, function() {
  		var thiswidth = $(this).innerWidth(),
  		  thisheight = $(this).innerHeight(),
  		  thisratio = reduce(thiswidth, thisheight);
  		$(this).children(".js-ratio-output").html( 'aspect ratio ' + thisratio );
		});
	}
	
	
	// Tabs for the inline sign in / join modal
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

});


// Functions

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  //return [numerator/gcd, denominator/gcd];
  return numerator/gcd + ':' + denominator/gcd;
}