<?php 

	defined('C5_EXECUTE') or die(_("Access Denied."));
	class EasysliderSlideshowBlockController extends BlockController {

		const pkgHandle = 'easy_slider';
		protected $btTable = 'btEasySliderSlideshow';
		protected $btInterfaceWidth = "500";
		protected $btInterfaceHeight = "50";
		
		public function on_page_view(){
			$html=Loader::helper('html');
			$this->addHeaderItem($html->javascript('view.js',pkgHandle));
		}
		
		public function getBlockTypeDescription() {
			return t("Create a Slider of Blocks");
		}
		
		public function getBlockTypeName() {
			return t("Easy Slider Slideshow");
		}
		
		/*
		public function getPreviousStep(){
			return isset($GLOBALS['concrete5_easy_slider_prevstep'])?$GLOBALS['concrete5_easy_slider_prevstep']:null;
		}
		public function setStep($step){
			$GLOBALS['concrete5_easy_slider_prevstep']=$step;
		}
		*/
		
		public function view(){
			echo '<script type="text/javascript">easy_slider_addBlock(\''.$this->bID.'\');</script>';
			echo '
if(CCM_EDIT_MODE){
	jQuery(document).load(function() {
		easy_slider_start();
	});
}
			';
		}
		
	}

?>