$(document).ready( function(){


	$('#def').darkTooltip();

	$('.confirm').darkTooltip({
		trigger:'click',
		animation:'flipIn',
		gravity:'north',
		/*confirm:true,
		yes:'Sure',
		no:'No Way',
		finalMessage: 'It has been deleted'*/
	});


	$('#effect-none').darkTooltip();
	$('#effect-flipin').darkTooltip({
		animation:'flipIn'
	});
	$('#effect-fadein').darkTooltip({
		animation:'fadeIn'
	});

	$('#theme-dark').darkTooltip();
	$('#theme-light').darkTooltip({
		theme:'light'
	});

});
