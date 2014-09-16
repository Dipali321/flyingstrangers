$(document).ready(function(){
	
	// Fancybox
	$("a.fancybox")
	    .attr('rel', 'video')
	    .fancybox({
			
	        openEffect  : 'none',
	        closeEffect : 'none',
	        nextEffect  : 'none',
	        prevEffect  : 'none',
	        padding     : 0,
		    tpl: {
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		    }
	       
		

	    });
		
		
// stickicky

$('.stuckem').waypoint('sticky', {
  direction: 'down',
  stuckClass: 'stuck',
  wrapper: '<div class="filter-wrapper"  />',
	}
);


$(".stuckem").waypoint(function(){
    $(this).css('top', '125px');    
},{offset:'80px'});

$(".stuckem").waypoint(function(){
    $(this).css('top', ' 0');
},{offset:'128px'});

  

// SEARCH BOX

$('.whiteslice').click(function(event) {
	event.preventDefault();
	$('.hiddensearch').removeClass('off');
	$('.hiddensearch').addClass('on').animate({'opacity':'1'}, 400);
	
});

$('.closesearch').click(function(event) {
	event.preventDefault();
	
	$('.hiddensearch').animate({'opacity':'0'}, 400, function() {
		$('.hiddensearch').removeClass('on');
		$('.hiddensearch').addClass('off');
	});
});

// SEARCH BOX

	
	// Toggle menu
	
	

	
	// Menu plus/minus
	// $('#simple-nav-toggle a').click(function() {
	// 	$this = $(this);
	// 	
	// 	$this.toggleClass('down'); // Arrow CSS
	// });
	
	// Slideshow

		// var slides = $("#slideshow");
//
//
// 			slides.cycle({
// 			    fx:     'fade',
// 			    speed:  1000,
// 			    timeout: 8000,
// 			    pager:  '#slide-nav',
// 				width: '100%',
// 				height: '100%',
// 				fit: true,
// 			    next:   '#next',
// 			    prev:   '#prev',
// 				after:function (curr, next, opts) {
// 								    var caption = '<p class="slideoutput"><span class="line"></span> ' + "0"+(opts.currSlide + 1) + ' &#x02758; ' + "0"+opts.slideCount + "</p>";
// 									$('#output').html(caption);
// 								}
// 			});
// 


// $( '#slideshow' ).on( 'cycle-before', function(event, opts, slideNum,slideCount ) {
// 	var caption1 = '<p class="slideoutput"><span class="line"></span>' + "0"+ slideNum  + ' &#x02758; ' + "0"+ slideCount+ "</p>";
// 	$('#output').html(caption1);
// });



			// BOXES!
			
			$('.stickyinner').css('opacity', '0');
			$('.stickybox').hover(function() {
				$('.stickyinner').animate({'opacity': 1}, 300)
			}, function() {
				$('.stickyinner').animate({'opacity': 0}, 300)
			});
			
			
			$('.rboxwrap').css('opacity', '0');
			$('.recentBoxes p ').hover(function() {
				
				$(this).find(".rboxwrap").animate({'opacity': 1}, 300)

			}, function() {

				$(this).find(".rboxwrap").animate({'opacity': 0}, 300)

			});
			
			
			// homepage boxes hover
			$('.boxsizeone').hover(function() {
				$(this).find(".boxonestickyinner").animate({'opacity': 1}, 300)
			}, function() {
				$(this).find(".boxonestickyinner").animate({'opacity': 0}, 300)
			});
			
			$('.boxsizetwo').hover(function() {
				$(this).find(".boxtwostickyinner").animate({'opacity': 1}, 300)
			}, function() {
				$(this).find(".boxtwostickyinner").animate({'opacity': 0}, 300)
			});
			
			$('.boxsizefour').hover(function() {
				$(this).find(".boxfourstickyinner").animate({'opacity': 1}, 300)
			}, function() {
				$(this).find(".boxfourstickyinner").animate({'opacity': 0}, 300)
			});
			
			$('.boxsizethree').hover(function() {
				$(this).find(".boxfourstickyinner").animate({'opacity': 1}, 300)
			}, function() {
				$(this).find(".boxfourstickyinner").animate({'opacity': 0}, 300)
			});
			
			$('.fullbox').hover(function() {
				$(this).find(".boxfullstickyinner").animate({'opacity': 1}, 300)
			}, function() {
				$(this).find(".boxfullstickyinner").animate({'opacity': 0}, 300)
			});
			
			
			
		// grid to list
		
		$('#listSearch').click(function(event) {
			event.preventDefault();
			 $('#catbox div img').hide();
			$('#catbox div img').animate({opacity:0}, 300);
			$('.listy').hide();
			$('.boxthreefull').css('left', 0);
			$('#catbox').css('margin-top', '40px');
			
		}); 
		
		$('#gridSearch').click(function(event) {
			event.preventDefault();
			$('#catbox div img').show();
			$('.boxthreefull').css('left', '15.3%');
			$('#catbox').css('margin-top', '0px');
			$('#catbox div img').animate({opacity:1}, 300);
			$('.listy').show();
			
			
		}); 
			
			
			

		// VIDEO MODAL
		$('.modalvideo').hide();
		$('.modalvideo').css('opacity', 0);
		$('.videoLink').click(function(event) {
			event.preventDefault();
			
			$('.modalvideo').insertAfter( $('.videoHolder') );
			$('.modalvideo').show();
			$('.modalvideo').animate({opacity: 1}, 800);
			
			$('.modalvideo').siblings().hide();
			
			$('.modalvideo').hover(function() {

				$('.modalclose').css('opacity', 0);
				$('.modalclose').animate({opacity: 1}, 800);
				
				$('.modalclose').click(function(event) {
				
					$('.modalvideo').animate({opacity: 0}, 800);
					
					setTimeout(function() {
						$('.modalvideo').hide();
						$('.modalvideo').siblings().show();
					}, 1000);

				});
				
			}, function() {
				$('.modalclose').animate({opacity: 0}, 800);
			});

			
		});
			
	

	
});