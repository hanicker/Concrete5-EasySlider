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
					});
})(jq15s)
