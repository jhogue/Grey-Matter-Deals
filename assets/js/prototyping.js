$(document).ready(function() {


	// Development Only scripts

  $(window).on('resize', showSize);

	showSize();

	function showSize() {
		$('#size').html( $(window).width() + 'px x ' + $(window).height() + 'px');
	}
});