<?php

defined('C5_EXECUTE') or die(_("Access Denied."));
class EasysliderSlideshowBlockController extends BlockController {

	const pkgHandle = 'easy_slider';
	protected $btTable = 'btEasySliderSlideshow';
	protected $btInterfaceWidth = "500";
	protected $btInterfaceHeight = "390";

	private function getBlockPath(){
		/*$bt = BlockType::getByHandle('easyslider_slideshow');
		 $uh = Loader::helper('concrete/urls');
		 $local = $uh->getBlockTypeAssetsURL($bt);
		 return $local;*/
		return BASE_URL.DIR_REL."/packages/easy_slider/blocks/easyslider_slideshow";
	}
	function __construct($obj = null) {
		parent::__construct($obj);
		$html=Loader::helper('html');
		//Load jQiery 1.5 and reset C5 Jquery after that
		$this->addHeaderItem('<script type="text/javascript">var jqC5 = jQuery.noConflict(true);</script>');
		$this->addHeaderItem($html->javascript($this->getBlockPath().'/libs/jquery.min.js'));
		$this->addHeaderItem('<script type="text/javascript">var jq15s = jQuery.noConflict(true);$=jqC5;jQuery=jqC5</script>');

	}

	/*public function on_page_view(){
		$this->addHeaderItem($html->javascript($uh->getBlockTypeAssetsURL($bt).'/view.js'));
		$this->addHeaderItem($html->javascript($uh->getBlockTypeAssetsURL($bt).'/slideshow.js'));
		$this->addHeaderItem($html->css($uh->getBlockTypeAssetsURL($bt).'/slideshow.css'));
		}*/

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
		global $c;
			
		$this->runSetter();
			
		if($c->isEditMode()){
			//if(!$c->isEditMode()) echo '<div id="b'.$this->bID.'-b" class="easyslider_slide">';
			echo '<script type="text/javascript">';
			if($this->isFinal($this->bID)){
				echo 'easy_slider_slideshow_ends.push(\''.$this->bID.'\');';
			}
			echo 'easy_slider_addBlock(\''.$this->bID.'\');';
			echo ''.
					'if(CCM_EDIT_MODE){'.
						'jQuery(document).ready(function() {'.
							'easy_slider_start();'.
						'});'.
					'}'.
				'';
			echo '</script>';
			//if(!$c->isEditMode()) echo '</div>';
		}else{
			if($GLOBALS['concrete5_easyslider_slideshow'][$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID]][0]==$this->bID){//start
				echo '<div id="easysliderslideshow_'.$this->bID.'" class="easysliderslideshow '.$this->getTemplateName().'"><div class="slides_container">';
				echo '<script type="text/javascript">easy_slider_slideshow_configs['.$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID].']={"slideTimes":new Array()}</script>';
				echo '<script type="text/javascript">easy_slider_slideshow_configs['.$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID].']["slideTimes"].push('.$this->slideTime.')</script>';
				echo '<!--SLIDER START-->';
				echo '<div class="slide">';
			}else if($GLOBALS['concrete5_easyslider_slideshow'][$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID]][count($GLOBALS['concrete5_easyslider_slideshow'][$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID]])-1]==$this->bID){//end
				echo '</div>';
				echo '<!--SLIDER END-->';
				if($this->isFinal($this->bID)){
					echo '<script type="text/javascript">';
					echo 'easy_slider_slideshow_configs['.$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID].']={ "showControls":'.$this->showControls.', "showPagination":'.$this->showPagination.', "autostart":'.$this->autostart.', "slideTime":'.$this->slideTime.', "slideTimes":easy_slider_slideshow_configs['.$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID].']["slideTimes"]};';
					//echo 'easy_slider_slideshow_configs.push({ "showControls":'.$this->showControls.', "autostart":'.$this->autostart.', "slideTime":'.$this->slideTime.'});';
					echo '</script>';
				}
				echo '</div></div>';
			}else{//middle
				echo '</div>';
				echo '<script type="text/javascript">easy_slider_slideshow_configs['.$GLOBALS['concrete5_easyslider_slideshow_rev'][$this->bID].']["slideTimes"].push('.$this->slideTime.')</script>';
				echo '<!--SLIDER CHANGE-->';
				echo '<div class="slide">';
			}
		}
	}
	private function isFinal($bID){
		return Block::getByID($bID)->getInstance()->isLast==1; //TODO:change
	}
	private function runSetter(){
		global $c;
		if(!$c->isEditMode()&&!isset($GLOBALS['concrete5_easyslider_slideshow'])){
			$GLOBALS['concrete5_easyslider_slideshow']=array();
			$GLOBALS['concrete5_easyslider_slideshow_rev']=array();
			$page=Page::getCurrentPage();
			$areas=$this->getCollectionAreas($page->cID);
			foreach($areas as $area){
				$blocks = $page->getBlocks($area['arHandle']);//TODO: check if putting $this->block->a->arHandle in view.php gets better performance
				$slideshow=array();
				foreach($blocks as $block){
					if($block->getBlockTypeHandle()=='easyslider_slideshow'){
						$slideshow[]=$block->bID;
						if($this->isFinal($block->bID)){
							$GLOBALS['concrete5_easyslider_slideshow'][]=$slideshow;
							//apply reverse start
							foreach($slideshow as $sbID){
								$GLOBALS['concrete5_easyslider_slideshow_rev'][$sbID]=count($GLOBALS['concrete5_easyslider_slideshow'])-1;
							}
							//apply reverse end
							$slideshow=array();
						}
					}
					/*if(count($slideshow)!=0){ //TODO:think about uncommenting
					 $GLOBALS['concrete5_easyslider_slideshow'][]=$slideshow;
						}*/
				}
			}
		}
	}
	private function getTemplateName(){
		$db = Loader::db();
		$r=$db->query('select bFilename from Blocks where bID = ?',array($this->bID));
		$row = $r->fetchRow();
		$name=$row['bFilename'];
		if(empty($name))
			return 'default';
		return $name;
	}
	private function getCollectionAreas($cID){
		$db = Loader::db();
		$r=$db->query('select DISTINCT(arHandle) from Areas where cID=?',array($cID));
		$rows = $r->GetAll();
		return $rows;
	}
	function save($data) {
		$data['slideTime']=intval($data['slideTime']);
		$data['autostart']=intval($data['autostart']);
		$data['showControls']=intval($data['showControls']);
		$data['showPagination']=intval($data['showPagination']);
		parent::save($data);
	}
}

?>