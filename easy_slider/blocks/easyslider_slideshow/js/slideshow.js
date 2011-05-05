   	// Attributions:
	//   1) original code from SixRevisions article:   http://sixrevisions.com/tutorials/javascript_tutorial/create-a-slick-and-accessible-slideshow-using-jquery/
	//   2) enhancements from Stephane Lyver: http://www.kerpix.com
	//   3) translated enhancements and tweaks from Philippe Monnet: http://blog.monnet-usa.com/?p=276
    // Revision: March 17, 2010
	
	// Enhancements
	var slideshow_start_mode  = false; 
    var autostart_slideshow = true;  
    var rewind_slideshow = true;  
    var display_slideshow_control_panel = true;  
	 
    var slide_transition_time = 1000;  
    var slide_viewing_time = 6000;  
       
    var slideshow_control_icons = new Array();  
	// Note: you can download the .png locally and edit the urls below to reflect your path
    slideshow_control_icons['play']  	= 'http://upload.wikimedia.org/wikipedia/commons/2/20/Control_play.png';  
    slideshow_control_icons['pause'] 	= 'http://upload.wikimedia.org/wikipedia/commons/0/09/Control_pause.png';     
    
	// Enhancements
	function start_slideshow() {  
	   slideshow_start_mode = true;  
	   interval = setInterval(show_next_slide, slide_viewing_time );  
	}  
	 
	function show_next_slide(){  
	   $('#rightControl').click();  
	}  
	 
	function pause_slideshow() {  
	   slideshow_start_mode = false;  
		   clearInterval(interval);  
	} 	
	
	function handle_control_panel_click()
	{
		if(slideshow_start_mode == true)
		{  
			$(this).attr('src',slideshow_control_icons['play']);  
			pause_slideshow();  
		}
		else
		{  
			$(this).attr('src',slideshow_control_icons['pause']);  
			start_slideshow();  
		}  
	}
	
	function setup_control_panel() 
	{
		//$('#slidesContainer').prepend('<img id="slideshow_control_panel" src="" alt="Navigation diaporama" />');  
		var control_panel = $('#slideshow_control_panel');

		if(autostart_slideshow == true)
			control_panel.attr('src',slideshow_control_icons['pause']);  
		else
			control_panel.attr('src',slideshow_control_icons['play']);    
			
		control_panel.bind('click', handle_control_panel_click);
	}
	
$(document).ready(function(){
  var currentPosition = 0;
  var slideWidth = 690;

  var slides = $('.slide');
  var numberOfSlides = slides.length;
  var interval;  

	
  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  //$('#slideshow')
  $('#slide-pagination').addClass('pagination');
  $('#slide-pagination')
    //.prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .prepend('<span class="control" id="leftControl">&laquo;</span>')
    //.append('<span class="control" id="rightControl">Clicking moves right</span>');
    .append('<img id="slideshow_control_panel" src="" alt="Navigation diaporama" \/>')
    .append('<span class="control" id="rightControl">&raquo;</span>');

  // Hide left arrow control on first load
  manageControls(currentPosition,numberOfSlides);

	// Conditionally setup the control panel if needed
    if(display_slideshow_control_panel == true)
		setup_control_panel();

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
	currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
    
		// If auto rewind is off pause the slideshow 
		// when on the last slide
		if(currentPosition == numberOfSlides && rewind_slideshow == false )
		{  
             currentPosition--;  
             pause_slideshow();  
        } 
	
	// Hide / show controls
    manageControls(currentPosition);
	
    // Move slideInner using margin-left
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    },slide_transition_time);
	
  });

	// If auto start is on kick off the slideshow
	if(autostart_slideshow == true){  
		start_slideshow();  
	}

    // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position){
    // Hide left arrow if position is first slide
	if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }

		// Hide right arrow if position is last slide
		// and if auto rewind is not on
		if(position==numberOfSlides-1 && rewind_slideshow == false)
		{
			$('#rightControl').hide();
		} else {
			$('#rightControl').show();
		}
		
		// Go back to the first slide if we're on the last slide
		// and if auto rewind is on
		if(position == numberOfSlides && rewind_slideshow == true){
			currentPosition = 0;
			 $('#leftControl').hide();
		}
  }	
	
});