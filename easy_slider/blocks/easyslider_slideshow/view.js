if (!(typeof easy_slider_slideshow != 'undefined')) {
	var easy_slider_slideshow = new Array();
	var easy_slider_slideshow_ends = new Array();
}
function easy_slider_addBlock(bID) {
	easy_slider_slideshow.push(bID);
}
function easy_slider_addEndBlock(bID) {
	easy_slider_slideshow_ends.push(bID);
}
function easy_slider_start() {
	(function($) {
		var started = false;
		var prev = null;
		for ( var i = 0; i < easy_slider_slideshow.length; i++) {
			$('div[id*=b' + easy_slider_slideshow[i] + '-]').each(
					function(index) {
						$(this).addClass('easy_slider_block');
						if (CCM_EDIT_MODE) {
							if (!started) {
								$(this).html('<p>Easy Slider Start</p>');
							} else if (!$.inArray(easy_slider_slideshow[i],
									easy_slider_slideshow_ends)) {
								$(this).html('<p>Easy Slider End</p>');
							} else {
								$(this).html('<p>Easy Slider New Slide</p>');
							}
						}
					});
			prev = $(this);
			if (!started)
				started = true;
		}
	})(jQuery)
}
jQuery(document).ready(function() {
	easy_slider_start();
});