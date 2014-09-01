$(document).ready(function(){
	
	// Fancybox
	// $("a.fancybox").fancybox({
	// 	'titlePosition'  : 'inside'
	// });
	
	// Toggle menu
	
	

	
	// Menu plus/minus
	// $('#simple-nav-toggle a').click(function() {
	// 	$this = $(this);
	// 	
	// 	$this.toggleClass('down'); // Arrow CSS
	// });
	
	// Slideshow

		var slides = $("#slideshow");


			slides.cycle({
			    fx:     'fade',
			    speed:  1000,
			    timeout: 8000,
			    pager:  '#slide-nav',
				width: '100%',
				height: '100%',
				fit: true,
			    next:   '#next',
			    prev:   '#prev',
				after:function (curr, next, opts) {
								    var caption = '<p class="slideoutput"><span class="line"></span> ' + "0"+(opts.currSlide + 1) + ' &#x02758; ' + "0"+opts.slideCount + "</p>";
									$('#output').html(caption);
								}
			});



			// BOXES!
			
			$('.stickyinner').css('opacity', '0');
			$('.stickybox').hover(function() {
				$('.stickyinner').animate({'opacity': 1}, 300)
			}, function() {
				$('.stickyinner').animate({'opacity': 0}, 300)
			});
			
			
			
			
			
			// VIDEO!
			window.onload = function() {

			  // Video
			  var video = document.getElementById("video");

			  // Buttons
			  var playButton = document.getElementById("play-pause");
			  var muteButton = document.getElementById("mute");
			  var fullScreenButton = document.getElementById("full-screen");

			  // Sliders
			  var seekBar = document.getElementById("seek-bar");
			  var volumeBar = document.getElementById("volume-bar");
			  
			  
			  
  			// Event listener for the play/pause button
  			playButton.addEventListener("click", function() {
  			  if (video.paused == true) {
  			    // Play the video
  			    video.play();

  			    // Update the button text to 'Pause'
  			    playButton.innerHTML = "||";
  			  } else {
  			    // Pause the video
  			    video.pause();

  			    // Update the button text to 'Play'
  			    playButton.innerHTML = "&#9654;";
  			  }
  			});
			
  			// Event listener for the full-screen button
  			fullScreenButton.addEventListener("click", function() {
  			  if (video.requestFullscreen) {
  			    video.requestFullscreen();
  			  } else if (video.mozRequestFullScreen) {
  			    video.mozRequestFullScreen(); // Firefox
  			  } else if (video.webkitRequestFullscreen) {
  			    video.webkitRequestFullscreen(); // Chrome and Safari
  			  }
  			});
			
  			// Event listener for the seek bar
  			seekBar.addEventListener("change", function() {
  			  // Calculate the new time
  			  var time = video.duration * (seekBar.value / 100);

  			  // Update the video time
  			  video.currentTime = time;
  			});
			
  			// Update the seek bar as the video plays
  			video.addEventListener("timeupdate", function() {
  			  // Calculate the slider value
  			  var value = (100 / video.duration) * video.currentTime;

  			  // Update the slider value
  			  seekBar.value = value;
  			});
			
  			// Pause the video when the slider handle is being dragged
  			seekBar.addEventListener("mousedown", function() {
  			  video.pause();
  			});

  			// Play the video when the slider handle is dropped
  			seekBar.addEventListener("mouseup", function() {
  			  video.play();
  			});
			
  			// Event listener for the volume bar
  			volumeBar.addEventListener("change", function() {
  			  // Update the video volume
  			  video.volume = volumeBar.value;
  			});

			}
			
	

	
});