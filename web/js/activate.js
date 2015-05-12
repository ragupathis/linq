function activate(url){




$.ajax({
        type: "POST",
		
		url: 'model/activate.php',			   
		data: {'url':url}
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
	  
      var t = JSON.parse(result);	
	
	
	if(t['replay']==='success'){
	
$('.success').css('display','block');
	
	}else if(t['replay']==='invalid'){
	
	$('.invalid').css('display','block');
	
	
	}else{
	
	
	$('.expired').css('display','block');
	}
	
}); 

}

function getVariable(variable){

var query=window.location.search.substring(1);
var vars=query.split('&');
for(var i=0;i<vars.length;i++){
var pair=vars[i].split("=");
if(pair[0]==variable){
return pair[1]; }
}
return (false);

}

$(document).ready(function(){


var url=getVariable('acc');
activate(url);

});