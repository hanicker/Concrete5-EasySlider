<?php 

	defined('C5_EXECUTE') or die(_("Access Denied."));
	class EasysliderSlideshowBlockController extends BlockController {

		const pkgHandle = 'easy_slider';
		protected $btTable = 'btEasySliderSlideshow';
		protected $btInterfaceWidth = "500";
		protected $btInterfaceHeight = "50";
		
		public function on_page_view(){
			
		}
		
		public function getBlockTypeDescription() {
			return t("List news based on type.");
		}
		
		public function getBlockTypeName() {
			return t("Easy News List");
		}
		
	}

?>