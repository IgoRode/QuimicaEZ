$(function() {
	$('.toggle_header').click(function(e){
		toggle_header();
	});
	function toggle_header(){
		if($('.sla').hasClass('show-header')){
			$('.sla').removeClass('show-header');
		}
		else{
			$('.sla').addClass('show-header');
		}
	}
});