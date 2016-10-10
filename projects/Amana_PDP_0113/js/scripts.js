//This script will fix the nav bar to the top when you scroll passed it and leave itself at it's original position upon scrolling back up.

$(document).ready(function() {
	var yOffset = $("#nav-bar").offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > yOffset) {
			$("#nav-bar").css({
				'top': 0,
				'position': 'fixed'
			});
		} else {
			$("#nav-bar").css({
				'top': yOffset + 'px',
				'position': 'absolute'
			});
		}
	});
});