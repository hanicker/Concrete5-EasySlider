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
						
						$('.easysliderslideshow.styled2').prepend('<div class="controls"><div><a href="#" class="prev"><img src="'+easyslider_slideshowblock_path+'/templates/styled2/images/prev.png" width="16" height="16" alt="Prev"></a></div><div><a href="#" class="play"><img src="'+easyslider_slideshowblock_path+'/templates/styled2/images/play.png" width="16" height="16" alt="Play"></a></div><div style="display:none"><a href="#" class="stop"><img src="'+easyslider_slideshowblock_path+'/templates/styled2/images/pause.png" width="16" height="16" alt="Stop"></a></div><div><a href="#" class="next"><img src="'+easyslider_slideshowblock_path+'/templates/styled2/images/next.png" width="16" height="16" alt="Next"></a></div></div>');
						
						//Activate slideshow
						$('.easysliderslideshow.styled2')
								.each(
										function(index) {
											var easyslider_autostart = easy_slider_slideshow_configs['styled2'][index]['autostart'];
											var easyslider_display_control_panel = easy_slider_slideshow_configs['styled2'][index]['showControls'];
											var easyslider_display_pagination = easy_slider_slideshow_configs['styled2'][index]['showPagination'];
											var easyslider_slide_viewing_time = easy_slider_slideshow_configs['styled2'][index]['slideTime'];
											var easyslider_slide_hover_pause = easy_slider_slideshow_configs['styled2'][index]['hoverPause'];
											if (easyslider_autostart == 0)
												easyslider_slide_viewing_time = 0;
											var playCustom = function(sindex,current) {
												if (easyslider_autostart == 0)
													return 0;
												if (easy_slider_slideshow_configs['styled2'][sindex]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs['styled2'][sindex]['slideTimes'][current];
												}
												if (easyslider_slide_viewing_time != 0)
													return easyslider_slide_viewing_time;												
												return 0;
											}
											var slide = $(this)
													.slides(
															{//Here you can use slidejs settings, see them in http://slidesjs.com/
																preload : false,
																generateNextPrev : (easyslider_display_control_panel == 1),
																generatePagination : (easyslider_display_pagination == 1),
																play : playCustom(index,0),
																pause : 500,
																hoverPause : easyslider_slide_hover_pause,
																autoHeight: true,
																playCustom : playCustom,
																index:index
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
										});						
					});
})(jq15s)
