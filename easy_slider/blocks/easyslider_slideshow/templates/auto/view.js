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
						//Activate slideshow
						$('.easysliderslideshow.auto')
								.each(
										function(index) {
											var width=($(this)).parent().width();
											$(this).width(width);									
											$('.slides_container',this).width(width);									
											$('.slide',this).width(width);									
											var easyslider_autostart = easy_slider_slideshow_configs['auto'][index]['autostart'];
											var easyslider_display_control_panel = easy_slider_slideshow_configs['auto'][index]['showControls'];
											var easyslider_display_pagination = easy_slider_slideshow_configs['auto'][index]['showPagination'];
											var easyslider_slide_viewing_time = easy_slider_slideshow_configs['auto'][index]['slideTime'];
											var easyslider_slide_hover_pause = easy_slider_slideshow_configs['auto'][index]['hoverPause'];
											var playCustom = function(sindex,current) {
												if (easy_slider_slideshow_configs['auto'][sindex]['slideTimes'][current] != 0) {
													return easy_slider_slideshow_configs['auto'][sindex]['slideTimes'][current];
												}
												if (easyslider_slide_viewing_time != 0)
													return easyslider_slide_viewing_time;												
												return 0;
											}
											if(easyslider_display_control_panel == 1){
												$(this).prepend('<div class="controls"><div><a href="#" class="prev"><img src="'+easyslider_slideshowblock_path+'/templates/auto/images/prev.png" width="16" height="16" alt="Prev"></a></div><div><a href="#" class="play"><img src="'+easyslider_slideshowblock_path+'/templates/auto/images/play.png" width="16" height="16" alt="Play"></a></div><div style="display:none"><a href="#" class="stop"><img src="'+easyslider_slideshowblock_path+'/templates/auto/images/pause.png" width="16" height="16" alt="Stop"></a></div><div><a href="#" class="next"><img src="'+easyslider_slideshowblock_path+'/templates/auto/images/next.png" width="16" height="16" alt="Next"></a></div></div>');											
											}
											
											slide = $(this)
													.slides(
															{//Here you can use slidejs settings, see them in http://slidesjs.com/
																preload : true,
																generateNextPrev : false,
																generatePagination : (easyslider_display_pagination == 1),
																play : (easyslider_autostart == 0)?0:1000,
																width:width,
																pause : 1000,
																autoHeight: true,
																hoverPause : easyslider_slide_hover_pause==1,
																playCustom : playCustom,
																index:index
															});
															
											//Play/Pause				
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
											if(easyslider_autostart!=0){
												switchPlayPause();
											}
											$('.play',this).click(function(){switchPlayPause()});
											$('.stop',this).click(function(){switchPlayPause()});															
											});																			
															
					
					});
})(jq15s)
