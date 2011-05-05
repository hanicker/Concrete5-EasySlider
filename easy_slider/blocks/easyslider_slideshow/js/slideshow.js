// Attributions:
//   1) original code from SixRevisions article:   http://sixrevisions.com/tutorials/javascript_tutorial/create-a-slick-and-accessible-easyslider_slideshow-using-jquery/
//   2) enhancements from Stephane Lyver: http://www.kerpix.com
//   3) translated enhancements and tweaks from Philippe Monnet: http://blog.monnet-usa.com/?p=276
// Finally edited by Nicola Moretti http://nicolamoretti.com for C5 easy_slider package

// Enhancements
(function($) {
	var easyslider_slideshowblock_path = CCM_REL
			+ '/packages/easy_slider/blocks/easyslider_slideshow';

	var easyslider_slideshow_start_mode = false;
	var easyslider_autoeasyslider_start_easyslider_slideshow = true;
	var easyslider_rewind_easyslider_slideshow = true;
	var easyslider_display_easyslider_slideshow_control_panel = true;

	var easyslider_slide_transition_time = 1000;
	var easyslider_slide_viewing_time = 6000;

	var easyslider_slideshow_control_icons = new Array();
	easyslider_slideshow_control_icons['play'] = easyslider_slideshowblock_path
			+ '/images/Control_play.png';
	easyslider_slideshow_control_icons['pause'] = easyslider_slideshowblock_path
			+ '/images/Control_pause.png';

	// Enhancements
	function easyslider_start_easyslider_slideshow() {
		easyslider_slideshow_start_mode = true;
		easyslider_interval = setInterval(
				easyslider_show_next_slide, easyslider_slide_viewing_time);
	}

	function easyslider_show_next_slide() {
		$('#rightControl').click();
	}

	function easyslider_pause_easyslider_slideshow() {
		easyslider_slideshow_start_mode = false;
		clearInterval(easyslider_interval);
	}

	function easyslider_handle_control_panel_click() {
		if (easyslider_slideshow_start_mode == true) {
			$(this).attr('src',
					easyslider_slideshow_control_icons['play']);
			easyslider_pause_easyslider_slideshow();
		} else {
			$(this).attr('src',
					easyslider_slideshow_control_icons['pause']);
			easyslider_start_easyslider_slideshow();
		}
	}

	function easyslider_setup_control_panel() {
		var control_panel = $('#easyslider_slideshow_control_panel');

		if (easyslider_autoeasyslider_start_easyslider_slideshow == true)
			control_panel.attr('src',
					easyslider_slideshow_control_icons['pause']);
		else
			control_panel.attr('src',
					easyslider_slideshow_control_icons['play']);

		control_panel.bind('click', easyslider_handle_control_panel_click);
	}

	$(document)
			.ready(
					function() {
						var easyslider_currentPosition = 0;
						var easyslider_slideWidth = 690;

						var easyslider_slides = $('.slide');
						var easyslider_numberOfSlides = easyslider_slides.length;
						var easyslider_interval;

						// Remove scrollbar in JS
						$('#easyslider_slidesContainer').css('overflow',
								'hidden');

						// Wrap all .easyslider_slides with #slideInner div
						easyslider_slides
								.wrapAll('<div id="slideInner"></div>')
								// Float left to display horizontally, readjust
								// .easyslider_slides
								// width
								.css({
									'float' : 'left',
									'width' : easyslider_slideWidth
								});

						// Set #slideInner width equal to total width of all
						// easyslider_slides
						$('#slideInner').css(
								'width',
								easyslider_slideWidth
										* easyslider_numberOfSlides);

						// Insert controls in the DOM
						// $('#easyslider_slideshow')
						$('#slide-pagination').addClass('pagination');
						$('#slide-pagination')
								// .prepend('<span class="control"
								// id="leftControl">Clicking moves left</span>')
								.prepend(
										'<span class="control" id="leftControl">&laquo;</span>')
								// .append('<span class="control"
								// id="rightControl">Clicking moves
								// right</span>');
								.append(
										'<img id="easyslider_slideshow_control_panel" src="" alt="Navigation diaporama" \/>')
								.append(
										'<span class="control" id="rightControl">&raquo;</span>');

						// Hide left arrow control on first load
						easyslider_manageControls(easyslider_currentPosition,
								easyslider_numberOfSlides);

						// Conditionally setup the control panel if needed
						if (easyslider_display_easyslider_slideshow_control_panel == true)
							easyslider_setup_control_panel();

						// Create event listeners for .controls clicks
						$('.control')
								.bind(
										'click',
										function() {
											// Determine new position
											easyslider_currentPosition = ($(
													this).attr('id') == 'rightControl') ? easyslider_currentPosition + 1
													: easyslider_currentPosition - 1;

											// If auto rewind is off pause the
											// easyslider_slideshow
											// when on the last slide
											if (easyslider_currentPosition == easyslider_numberOfSlides
													&& easyslider_rewind_easyslider_slideshow == false) {
												easyslider_currentPosition--;
												easyslider_pause_easyslider_slideshow();
											}

											// Hide / show controls
											easyslider_manageControls(easyslider_currentPosition);

											// Move slideInner using margin-left
											$('#slideInner')
													.animate(
															{
																'marginLeft' : easyslider_slideWidth
																		* (-easyslider_currentPosition)
															},
															easyslider_slide_transition_time);

										});

						// If auto start is on kick off the easyslider_slideshow
						if (easyslider_autoeasyslider_start_easyslider_slideshow == true) {
							easyslider_start_easyslider_slideshow();
						}

						// easyslider_manageControls: Hides and Shows controls
						// depending on
						// easyslider_currentPosition
						function easyslider_manageControls(position) {
							// Hide left arrow if position is first slide
							if (position == 0) {
								$('#leftControl').hide()
							} else {
								$('#leftControl').show()
							}

							// Hide right arrow if position is last slide
							// and if auto rewind is not on
							if (position == easyslider_numberOfSlides - 1
									&& easyslider_rewind_easyslider_slideshow == false) {
								$('#rightControl').hide();
							} else {
								$('#rightControl').show();
							}

							// Go back to the first slide if we're on the last
							// slide
							// and if auto rewind is on
							if (position == easyslider_numberOfSlides
									&& easyslider_rewind_easyslider_slideshow == true) {
								easyslider_currentPosition = 0;
								$('#leftControl').hide();
							}
						}

					});
})(jQuery)