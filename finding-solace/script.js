$(document).ready(function(){

	$('.word').on('click', function(){
    $(this).parent().prev('.definition').toggle(this);
	});

});
