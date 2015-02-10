var user_name,unf,unf1;

function counts()
{   
	
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/admin.php',			       
   	}).done(function(result) {
	  result = result.substring(1, result.length - 1);
      var t = JSON.parse(result);	
	  // code to display added sites 
	  
	  
	  function generate(myval,cls){
		  console.log(myval);
	  $({ someValue: 0 }).animate({ someValue: myval }, {
    duration: 3000,
    easing: 'swing', // can be anything
    step: function () { // called on every step
        // Update the element's text with rounded-up value:
        $(cls).text(commaSeparateNumber(Math.round(this.someValue)));
    }
});

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}
	  }
	  generate(t.usr,'.usr');
	generate(t.like,'.liks');
	generate(t.site,'.sits');
	generate(t.cat,'.cats');
	 //$('.usr').html(t.usr);
	 /*$('.liks').html(t.lik);
	 $('.sits').html(t.site);
	 $('.cats').html(t.cat);
	 */
	 
	 

	});   
}


var i=0,j=0;

$(document).ready(function(){

counts();


});
