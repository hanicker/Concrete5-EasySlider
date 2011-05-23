// Attributions:
//   1) original code from SixRevisions article:   http://sixrevisions.com/tutorials/javascript_tutorial/create-a-slick-and-accessible-easyslider_slideshow-using-jquery/
//   2) enhancements from Stephane Lyver: http://www.kerpix.com
//   3) translated enhancements and tweaks from Philippe Monnet: http://blog.monnet-usa.com/?p=276
// Finally edited by Nicola Moretti http://nicolamoretti.com for C5 easy_slider package
//TODO: correct info
// Enhancements
(function($) {

	$(document)
			.ready(
					function() {
						$('.easysliderslideshow.styled').append('<a href="#" class="prev"><img src="'+easyslider_slideshowblock_path+'/templates/styled/images/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a><a href="#" class="next"><img src="'+easyslider_slideshowblock_path+'/templates/styled/images/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>');
						
						//Activate slideshow
						$('.easysliderslideshow.styled')
								.each(
										function(index) {
											var easyslider_autostart = easy_slider_slideshow_configs['styled'][index]['autostart'];
											var easyslider_display_control_panel = easy_slider_slideshow_configs['styled'][index]['showControls'];
											var easyslider_display_pagination = easy_slider_slideshow_configs['styled'][index]['showPagination'];
											var easyslider_slide_viewing_time = easy_slider_slideshow_configs['styled'][index]['slideTime'];
											var easyslider_slide_hover_pause = easy_slider_slideshow_configs['styled'][index]['hoverPause'];
											if (easyslider_autostart == 0)
												easyslider_slide_viewing_time = 0;
											var playCustom = function(sindex,current) {
												if (easyslider_autostart == 0)
													return 0;
												if (easy_slider_slideshow_configs['styled'][sindex]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs['styled'][sindex]['slideTimes'][current];
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
																play : playCustom(index,0),
																pause : 3000,
																hoverPause : easyslider_slide_hover_pause,
																autoHeight: true,
																playCustom : playCustom,
																index:index
															});
										});						
					});
})(jq15s)
