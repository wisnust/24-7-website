$(function () {
	$(window).scroll(function () {
		var sticky = $(".navbar"),
			scroll = $(window).scrollTop();
		if (scroll >= 90) {
			sticky.addClass("sticky-header");
		} else {
			sticky.removeClass("sticky-header");
		} 
	});
});