/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 


this.tooltip = function(){	
//alert('ff');
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
//	$(document.body).on('mouseover',".ls_tooltip",function(e){
	$(".ls_tooltip").hover(function(e){	
	//alert('ok');
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='ls_tooltip'>"+ this.t +"</p>");
		$("#ls_tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#ls_tooltip").remove();
    });	
	//$("a.ls_tooltip").mousemove(function(e){
	$(document.body).on('mousemove',".ls_tooltip",function(e){
		$("#ls_tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



// starting the script on page load
$(document).ready(function(){
	tooltip();
});