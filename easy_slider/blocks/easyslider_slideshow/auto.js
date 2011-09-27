var easyslider_slideshow_enableLast = function(){
	$('#isLastValue').val(1);
    $('#easyslider_slideshow_isNotLast :input').attr('disabled', true);
    $('#easyslider_slideshow_isLast :input').removeAttr('disabled');
	jQuery('#easyslider_slideshow_isLast').show();
	jQuery('#easyslider_slideshow_isNotLast').hide();
	jQuery('#slideTimeValue').val(jQuery('#slideTime_').val());
}
var easyslider_slideshow_disableLast = function(){
	$('#isLastValue').val(0);
    $('#easyslider_slideshow_isNotLast :input').removeAttr('disabled');
    $('#easyslider_slideshow_isLast :input').attr('disabled', true);	
    jQuery('#easyslider_slideshow_isLast').hide();
    jQuery('#easyslider_slideshow_isNotLast').show();
	jQuery('#slideTimeValue').val(jQuery('#slideTime__').val());
}
var easyslider_slideshow_enableWrapper = function(){
	jQuery('#easyslider_slideshow_isLast_hasWrapper').show();
}
var easyslider_slideshow_disableWrapper = function(){
	jQuery('#easyslider_slideshow_isLast_hasWrapper').hide();
}
jQuery('#isLast_').change(function () {
    if (jQuery(this).attr("checked")) {
    	easyslider_slideshow_enableLast();
        return;
    }
    easyslider_slideshow_disableLast();
});
jQuery('#slideTime_').change(function () {
    jQuery('#slideTimeValue').val(jQuery('#slideTime_').val());
});
jQuery('#slideTime__').change(function () {
    jQuery('#slideTimeValue').val(jQuery('#slideTime__').val());
});
jQuery('#hasWrapper').change(function () {
    if (jQuery(this).attr("checked")) {
    	easyslider_slideshow_enableWrapper();
        return;
    }
    easyslider_slideshow_disableWrapper();
});