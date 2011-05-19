function easy_slider_addBlock(bID) {
	easy_slider_slideshow.push(bID);
}
function easy_slider_addEndBlock(bID) {
	easy_slider_slideshow_ends.push(bID);
}
function easy_slider_start() {
	(function($) {
		var lastend = true;

		for ( var i = 0; i < easy_slider_slideshow.length; i++) {
			$('div[id*=b' + easy_slider_slideshow[i] + '-]').each(
					function(index) {
						$(this).addClass('easy_slider_block');
						if (CCM_EDIT_MODE) {
							if (lastend) {
								$(this).html('<p>Easy Slider Start</p>');
								lastend = false;
							} else if ($.inArray(easy_slider_slideshow[i],
									easy_slider_slideshow_ends)> -1) {
								$(this).html('<p>Easy Slider End</p>');
								lastend = true;
							} else {
								$(this).html('<p>Easy Slider Change Slide</p>');
							}
						}
					});

		}
	})(jQuery)
}
var easyslider_slideshowblock_path = CCM_REL
+ '/packages/easy_slider/blocks/easyslider_slideshow';
jQuery(document).ready(function() {
	easy_slider_start();
});