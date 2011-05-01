if (!(typeof easy_slider_slideshow != 'undefined')) {
	var easy_slider_slideshow=new Array();
	var easy_slider_slideshow_ends=new Array();
}
function easy_slider_addBlock(bID){
	easy_slider_slideshow.push(bID);
}
function easy_slider_addEndBlock(bID){
	easy_slider_slideshow_ends.push(bID);
}
function easy_slider_start(){
	for(var i=0; i<easy_slider_slideshow.length; i++){
		jQuery('div[id*=b'+easy_slider_slideshow[i]+'-]').each(function(index) {
			$this.html('<p>Slider Block</p>');
		});
	}
}
jQuery(document).ready(function() {
	easy_slider_start();
});