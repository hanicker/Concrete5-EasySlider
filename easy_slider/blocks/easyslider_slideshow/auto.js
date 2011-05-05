var easyslider_slideshow_enableLast = function(){
    $('#easyslider_slideshow_isNotLast :input').attr('disabled', true);
    $('#easyslider_slideshow_isLast :input').attr('disabled', false);	
	jQuery('#easyslider_slideshow_isLast').show();
	jQuery('#easyslider_slideshow_isNotLast').hide();
}
var easyslider_slideshow_disableLast = function(){
    $('#easyslider_slideshow_isNotLast :input').attr('disabled', false);
    $('#easyslider_slideshow_isLast :input').attr('disabled', true);	
    jQuery('#easyslider_slideshow_isLast').hide();
    jQuery('#easyslider_slideshow_isNotLast').show();
}
jQuery('#isLast').change(function () {
    if (jQuery(this).attr("checked")) {
    	easyslider_slideshow_enableLast();
        return;
    }
    easyslider_slideshow_disableLast();
});