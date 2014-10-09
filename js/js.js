
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
	//	document.getElementById('mailid').value='';
	//	document.getElementById('signin-password').value='';
		$('.signinerr').css('display','block');
		document.getElementById('mailid').placeholder='please enter valid mail id';
		document.getElementById('signin-password').placeholder='please enter valid password';
	
		}
	});  
}


			
			
			
$(document.body).on('mousedown','#signin',function(){
		//	alert('k');
	user_check();
});


$('#signin-password').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 user_check();
	}
	});
	
	$('#mailid').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 user_check();
	}
	});

$(document.body).on('mousedown','#signup',function(){

add_user();
});

$('#signup-password').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 add_user();
	}
	});

function add_user(){

		//	alert('k');
		var screen_name=document.getElementById('signup-username').value;
		var userid=document.getElementById('signup-email').value;
		var pwd=document.getElementById('signup-password').value;
//		user_register(screen_name,userid,pwd);
		
$('.usernameerr').css('display','none');
$('.emailerr').css('display','none');
$('.passworderr').css('display','none');
		
   	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   	if(screen_name.length>3){
	if(pwd.length>3){
   	if  (!testEmail.test(userid)) {
		//user_login(user_name);
		//$('.lgfailed').css('display','block');
		$('.emailerr').css('display','block');
	}else{
		user_register(screen_name,userid,pwd);
	//	$( this ).dialog( "close" );
	}}else{
	$('.cd-error-message').css('display','block');
	//document.getElementById('signup-password').value='';
	//document.getElementById('signup-password').placeholder='password should be minimum 3 char';
	$('.passworderr').css('display','block');
	}
	}else{
	//document.getElementById('signup-username').value='';
	//document.getElementById('signup-username').placeholder='user name should be minimum 3 char';
	$('.usernameerr').html('please enter more than three characters');
	$('.usernameerr').css('display','block');
	}

}

function user_check(){

	var user_name=document.getElementById('mailid').value;
	var user_password=document.getElementById('signin-password').value;
	
   	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   	
   	if (!testEmail.test(user_name) && user_password.length<3) {
		//user_login(user_name);
		$('.lgfailed').css('display','block');
		//document.getElementById('mailid').value='';
		//document.getElementById('signin-password').value='';
		
		//document.getElementById('mailid').placeholder='please enter valid mail id';
		//document.getElementById('signin-password').placeholder='please enter valid password';
		$('.signinerr').css('display','block');
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
		if(t['response']==='olduser'){
		
		//document.getElementById('signup-email').value='';
		document.getElementById('signup-email').placeholder='email id already exists';
		$('.emailerr').html("email id already exists");
		$('.emailerr').css('display','block');
		
		}else{
	    sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['screen_name']=t['screen_name'];
		sessionStorage['status_code']='first_login';
	    window.location='menu.html';
		}
	});  

}
