<?php  
defined('C5_EXECUTE') or die(_("Access Denied."));
?>
<div class="ccm-block-field-group">
	<h2><?php echo t('This is the last slide of the slideshow')?></h2>
	<?php echo t('(Check for yes)') ?> <?php echo $form->checkbox('isLast', '1', $isLast==1); ?>
</div>
<div id="easyslider_slideshow_isLast" <?php echo !($isLast==1)?'style="display:none"':'' ?>>
	<p><?php echo t('By setting following fields you will redefine this slideshow settings for every slide. You can redefine settings of each slide by modifying single transition block')?></p>
	<div class="ccm-block-field-group">
		<h2><?php echo t('Default slide time (milliseconds)')?></h2>
		<?php echo $form->text('slideTime', $slideTime); ?>
	</div>	
	<div class="ccm-block-field-group">
		<h2><?php echo t('Autostart')?></h2>
		<?php echo $form->checkbox('autostart', '1', $isLast==1); ?>
	</div>		
</div>
<div id="easyslider_slideshow_isNotLast" <?php echo $isLast==1?'style="display:none"':'' ?>>
	<div class="ccm-block-field-group">
		<h2><?php echo t('Slide time (milliseconds)')?></h2>
		<?php echo $form->text('slideTime', $slideTime); ?>
	</div>
	<?php 
		echo $form->hidden('isLast','0');
		echo $form->hidden('autostart','0');
	?>
</div>