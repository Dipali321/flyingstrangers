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
				fit: true,
			    next:   '#next',
			    prev:   '#prev',
				after:function (curr, next, opts) {
								    var caption = '<p class="slideoutput"><span class="line"></span> ' + "0"+(opts.currSlide + 1) + ' &#x02758; ' + "0"+opts.slideCount + "</p>";
									$('#output').html(caption);
								}
			});


	
});