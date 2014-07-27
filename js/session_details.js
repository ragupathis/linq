
var gsession = {};
gsession.setSession = (function(key,value){
	
//	alert("this is in setsessoion file");
	if(value!='undefined' || value!=''){
	sessionStorage[key]=value;
	}
	
	});
	
gsession.getSession=(function(key){
	
//	alert("this is in getsessoion file");

	return sessionStorage[key];
	
	});
	
gsession.clearSession=(function(key){
	
	//alert("this is in clearsessoion file");

	sessionStorage.removeItem(key);
	
	});



 $(document).ready(function(){	  
		$('#signout').click(function() {
		gsession.clearSession('hash_val');
		window.location = "index.html";		
	});
		
});	
   
   
