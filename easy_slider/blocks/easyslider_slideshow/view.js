// Attributions:
//   1) original code from SixRevisions article:   http://sixrevisions.com/tutorials/javascript_tutorial/create-a-slick-and-accessible-easyslider_slideshow-using-jquery/
//   2) enhancements from Stephane Lyver: http://www.kerpix.com
//   3) translated enhancements and tweaks from Philippe Monnet: http://blog.monnet-usa.com/?p=276
// Finally edited by Nicola Moretti http://nicolamoretti.com for C5 easy_slider package
//TODO: correct info
// Enhancements
(function($) {

	var easyslider_slideshowblock_path = CCM_REL
			+ '/packages/easy_slider/blocks/easyslider_slideshow';

	var easyslider_slideshow_start_mode = false;
	var easyslider_autostart = true;
	var easyslider_rewind_easyslider_slideshow = true;
	var easyslider_display_control_panel = true;

	var easyslider_slide_transition_time = 1000;
	var easyslider_slide_viewing_time;

	$(document)
			.ready(
					function() {
						// Start code to remove block wrappers
						$('.easysliderslideshow').each(
								function(index) {
									var txt = "";
									$('.slide', this).each(
											function() {
												txt += '<div class="slide">'
														+ $(this).html()
														+ '</div>';
											});
									$('.easysliderslideshow .slides_container',this).html(txt);
								});
						// End code to remove block wrappers
						$('.easysliderslideshow')
								.each(
										function(index) {
											easyslider_autostart = easy_slider_slideshow_configs[index]['autostart'];
											easyslider_display_control_panel = easy_slider_slideshow_configs[index]['showControls'];
											easyslider_display_pagination = easy_slider_slideshow_configs[index]['showPagination'];
											easyslider_slide_viewing_time = easy_slider_slideshow_configs[index]['slideTime'];
											if (easyslider_autostart == 0)
												easyslider_slide_viewing_time = 0;
											var playCustom = function(current) {
												if (easyslider_slide_viewing_time != 0)
													return easyslider_slide_viewing_time;
												if (easy_slider_slideshow_configs[index]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs[index]['slideTimes'][current];
												}
												return 6000;
											}
											slide = $(this)
													.slides(
															{
																preload : true,
																generateNextPrev : (easyslider_display_control_panel == 1),
																generatePagination : (easyslider_display_pagination == 1),
																play : 1,
																pause : 3000,
																hoverPause : true,
																autoHeight: true,
																playCustom : playCustom
															});
										});
					});
})(jq15s)