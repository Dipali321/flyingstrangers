$(document).ready(function(){
	

$(".menulink").click(function(){
	$('#menu').show(10);	
      $("#menu").toggleClass("active");
      $(".pushme").toggleClass("active");

});

$(".closemenu").click(function(){
		$('#menu').hide(500);
      $("#menu").toggleClass("active");
      $(".pushme").toggleClass("active");

});






});
