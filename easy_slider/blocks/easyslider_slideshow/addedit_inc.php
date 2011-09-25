<?php  
defined('C5_EXECUTE') or die(_("Access Denied."));
?>
<div class="ccm-block-field-group">
	<h2><?php echo t('This is the last slide of the slideshow')?></h2>
	<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('isLast_', '1', $isLast==1); ?>
</div>
<div id="easyslider_slideshow_isLast" <?php echo !($isLast==1)?'style="display:none"':'' ?>>
	<p><?php echo t('By setting following fields you will redefine this slideshow settings for every slide. You can redefine settings of each slide by modifying single transition block')?></p>
	<div class="ccm-block-field-group">
		<h2><?php echo t('Default slide time (milliseconds), leave 0 to use customized per-slide settings')?></h2>
		<?php echo $form->text('slideTime', $slideTime); ?>
	</div>	
	<div class="ccm-block-field-group">
		<h2><?php echo t('Autostart')?></h2>
		<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('autostart', '1', $autostart==1); ?>
	</div>		
	<div class="ccm-block-field-group">
		<h2><?php echo t('Show Controls')?></h2>
		<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('showControls', '1', $showControls==1); ?>
	</div>		
	<div class="ccm-block-field-group">
		<h2><?php echo t('Show Pagination')?></h2>
		<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('showPagination', '1', $showPagination==1); ?>
	</div>		
	<div class="ccm-block-field-group">
		<h2><?php echo t('Hover (mouse) pause')?></h2>
		<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('hoverPause', '1', $hoverPause==1); ?>
	</div>		
	<div class="ccm-block-field-group">
		<h2><?php echo t('In case theme you are using has a block wrapper set for this area (Advanced Option)')?></h2>
		<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('hasWrapper', '1', !empty($wrapperStart)||!empty($wrapperEnd)); ?>
	</div>
	<div id="easyslider_slideshow_isLast_hasWrapper" <?php echo (empty($wrapperStart)&&empty($wrapperEnd))?'style="display:none"':'' ?>>
		<div class="ccm-block-field-group">
			<h2><?php echo t('Wrapper Start')?></h2>
			<?php echo $form->textArea('wrapperStart',$wrapperStart)?>
		</div>	
		<div class="ccm-block-field-group">
			<h2><?php echo t('Wrapper End')?></h2>
			<?php echo $form->textArea('wrapperEnd',$wrapperEnd)?>
		</div>			
	</div>
</div>
<div id="easyslider_slideshow_isNotLast" <?php echo $isLast==1?'style="display:none"':'' ?>>
	<div class="ccm-block-field-group">
		<h2><?php echo t('Slide time (milliseconds)')?></h2>
		<?php echo $form->text('slideTime', $slideTime); ?>
	</div>
</div>
<input type="hidden" name="isLast" id="isLastValue" value="0" />
<script type="text/javascript">
<?php echo $isLast==1?'easyslider_slideshow_enableLast()':'easyslider_slideshow_disableLast()' ?>
</script>