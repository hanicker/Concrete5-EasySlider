if (!(typeof easy_slider_slideshow != 'undefined')) {
	var easy_slider_slideshow = new Array();
	var easy_slider_slideshow_ends = new Array();
	var easy_slider_slideshow_configs = new Array();
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

		for ( var i = 0; i < easy_slider_slideshow.length; i++) {
			$('div[id*=b' + easy_slider_slideshow[i] + '-]').each(
					function(index) {
						$(this).addClass('easy_slider_block');
						if (CCM_EDIT_MODE) {
							if (!started) {
								$(this).html('<p>Easy Slider Start</p>');
								started = true;
							} else if (!$.inArray(easy_slider_slideshow[i],
									easy_slider_slideshow_ends)&&started) {
								$(this).html('<p>Easy Slider End</p>');
								started = false;
							} else {
								$(this).html('<p>Easy Slider New Slide</p>');
								started = true;
							}
						}
					});

		}
	})(jQuery)
}
jQuery(document).ready(function() {
	easy_slider_start();
});