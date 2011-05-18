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
						$('.easysliderslideshow.waaahome').prepend('<div class="controls"><div><a href="#" class="prev">&laquo;</a></div><div><a href="#" class="play"><img src="'+easyslider_slideshowblock_path+'/templates/waaahome/images/play.png" width="16" height="16" alt="Play"></a></div><div style="display:none"><a href="#" class="stop"><img src="'+easyslider_slideshowblock_path+'/templates/waaahome/images/pause.png" width="16" height="16" alt="Stop"></a></div><div><a href="#" class="next">&raquo;</a></div></div>');
						
						//Activate slideshow
						$('.easysliderslideshow.waaahome')
								.each(
										function(index) {
											var easyslider_autostart = easy_slider_slideshow_configs[easyslider_slide_slideshowindex]['autostart'];
											var easyslider_display_control_panel = easy_slider_slideshow_configs[easyslider_slide_slideshowindex]['showControls'];
											var easyslider_display_pagination = easy_slider_slideshow_configs[easyslider_slide_slideshowindex]['showPagination'];
											var easyslider_slide_viewing_time = easy_slider_slideshow_configs[easyslider_slide_slideshowindex]['slideTime'];
											var easyslider_slide_hover_pause = easy_slider_slideshow_configs[easyslider_slide_slideshowindex]['hoverPause'];
											if (easyslider_autostart == 0)
												easyslider_slide_viewing_time = 0;
											var playCustom = function(sindex,current) {
												if (easyslider_slide_viewing_time != 0)
													return easyslider_slide_viewing_time;
												if (easy_slider_slideshow_configs[sindex]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs[sindex]['slideTimes'][current];
												}
												return 6000;
											}
											var slide = $(this)
													.slides(
															{//Here you can use slidejs settings, see them in http://slidesjs.com/
																preload : false,
																generateNextPrev : (easyslider_display_control_panel == 1),
																generatePagination : (easyslider_display_pagination == 1),
																play : 1,
																pause : 500,
																hoverPause : easyslider_slide_hover_pause,
																autoHeight: true,
																playCustom : playCustom,
																index:easyslider_slide_slideshowindex
															});
											var ele=$(this);
											function switchPlayPause(){
												if($('.play',ele).parent().is(":visible")){
													$('.play',ele).parent().hide();
													$('.stop',ele).parent().show();
												}else{
													$('.play',ele).parent().show();
													$('.stop',ele).parent().hide();											
												}
											}
											if(playCustom(0)!=0){
												switchPlayPause();
											}
											$('.play',this).click(function(){switchPlayPause()});
											$('.stop',this).click(function(){switchPlayPause()});
											easyslider_slide_slideshowindex++;
										});						
					});
})(jq15s)
