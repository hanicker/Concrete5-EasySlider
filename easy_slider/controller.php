<?php 

defined('C5_EXECUTE') or die(_("Access Denied."));

class EasySliderPackage extends Package {

	protected $pkgHandle = 'easy_slider';
	protected $appVersionRequired = '5.4.0';
	protected $pkgVersion = '1.5';
	
	public function getPackageDescription() {
		return t('Easily add slideshow of blocks');
	}
	
	public function getPackageName() {
		return t('Easy Slider');
	}
	
	public function install() {
		$pkg = parent::install();
		
		//install block
		BlockType::installBlockTypeFromPackage('easyslider_slideshow', $pkg); 
	}
}