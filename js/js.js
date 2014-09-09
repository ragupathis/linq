
function user_login(user_name,user_password){
    $.ajax({
        type: "POST",
		url: 'model/login_details.php',			
		data: {'user_id':user_name,'password':user_password}    
   	}).done(function(result) {
	    result = result.substring(1, result.length - 1);
        var t = JSON.parse(result);	
	    //console.log(t['hash']);
		console.log(t['screen_name']);
		if(t['status']==='yes'){
		sessionStorage['screen_name']=t['screen_name'];
	    sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['status_code']='first_login';
	    window.location='menu.html';}
		else{
		console.log('false');
		}
	});  
}


			
			
			
$(document.body).on('mousedown','#signin',function(){
		//	alert('k');
	user_check();
});

$(document.body).on('mousedown','#signup',function(){
		//	alert('k');
		var screen_name=document.getElementById('signup-username').value;
		var userid=document.getElementById('signup-email').value;
		var pwd=document.getElementById('signup-password').value;
		user_register(screen_name,userid,pwd);

});


function user_check(){

	var user_name=document.getElementById('mailid').value;
	var user_password=document.getElementById('signin-password').value;
	
   	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   	
   	if (!testEmail.test(user_name)) {
		//user_login(user_name);
		$('.lgfailed').css('display','block');
	}else{
		user_login(user_name,user_password);
	//	$( this ).dialog( "close" );
	}
	
}

function user_register(screen_name,mailid,password){

  $.ajax({
        type: "POST",
		url: 'model/sign_up.php',			
		data: {'screen_name':screen_name,'mail':mailid,'password':password}    
   	}).done(function(result) {
	    result = result.substring(1, result.length - 1);
        var t = JSON.parse(result);	
	    //console.log(t['hash']);
	    sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['screen_name']=t['screen_name'];
		sessionStorage['status_code']='first_login';
	    window.location='menu.html';
	});  

}
