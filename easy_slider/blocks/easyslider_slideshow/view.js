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
						
						//Activate slideshow
						$('.easysliderslideshow.default')
								.each(
										function(index) {
											var easyslider_autostart = easy_slider_slideshow_configs['default'][index]['autostart'];
											var easyslider_display_control_panel = easy_slider_slideshow_configs['default'][index]['showControls'];
											var easyslider_display_pagination = easy_slider_slideshow_configs['default'][index]['showPagination'];
											var easyslider_slide_viewing_time = easy_slider_slideshow_configs['default'][index]['slideTime'];
											var easyslider_slide_hover_pause = easy_slider_slideshow_configs['default'][index]['hoverPause'];
											if (easyslider_autostart == 0)
												easyslider_slide_viewing_time = 0;
											var playCustom = function(sindex,current) {
												if (easy_slider_slideshow_configs['default'][sindex]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs['default'][sindex]['slideTimes'][current];
												}
												if (easyslider_slide_viewing_time != 0)
													return easyslider_slide_viewing_time;												
												return 0;
											}
											slide = $(this)
													.slides(
															{//Here you can use slidejs settings, see them in http://slidesjs.com/
																preload : true,
																generateNextPrev : (easyslider_display_control_panel == 1),
																generatePagination : (easyslider_display_pagination == 1),
																play : (easyslider_autostart == 0)?0:1000,
																pause : 3000,
																hoverPause : easyslider_slide_hover_pause==1,
																autoHeight: true,
																playCustom : playCustom,
																index:index
															});
										});			
					});
})(jq15s)