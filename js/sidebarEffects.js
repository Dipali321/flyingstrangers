$(document).ready(function(){
	$('#menu').hide();
$(".menulink, .closemenu").click(function(){
	if (true) {
		$("#menu").hasClass("active");
			$('#menu').show(100);
	}
	else {
		$('#menu').hide();
	}

      $("#menu").toggleClass("active");
      $(".pushme").toggleClass("active");
});



});
