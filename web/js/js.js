
function user_login(user_name,user_password){
    $.ajax({
        type: "POST",
		url: 'model/login_details.php',			
		data: {'user_id':user_name,'password':user_password}    
   	}).done(function(result) {
	    result = result.substring(1, result.length - 1);
        var t = JSON.parse(result);	
		$('#signin').val('Login');
	    //console.log(t['hash']);
		//console.log(t['screen_name']);
		if(t['status']==='yes'){
		localStorage.screen_name=t['screen_name'];
		localStorage.hash=t['hash'];
		localStorage.mail=t['mail'];
		localStorage.status_code='first_login';
		
		/*sessionStorage['screen_name']=t['screen_name'];
	    sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['status_code']='first_login';*/
	    window.location='home.html';}
		else if(t['status']==='yet'){
			$('.signinerr').css('display','block');
			$('.signinerr').html('please verify your mail');
		//document.getElementById('mailid').placeholder='please enter valid mail id';
		//document.getElementById('signin-password').placeholder='please enter valid password';
	
		
		}
		else{
		//console.log('false');
	//	document.getElementById('mailid').value='';
	//	document.getElementById('signin-password').value='';
		$('.signinerr').css('display','block');
		$('.signinerr').html('please check username and password');
		document.getElementById('mailid').placeholder='please enter valid mail id';
		document.getElementById('signin-password').placeholder='please enter valid password';
	
		}
	});  
}


			
			
		
$(document.body).on('mousedown','#signin',function(){
		//	alert('k');
		$('#signin').val('Please Wait...');
	user_check();
});


$('#signin-password').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();
$('#signin').val('Please Wait...');
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
$('signup').val('Please Wait...');
add_user();
});

$('#signup-password').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();
$('signup').val('Please Wait...');
		 add_user();
	}
	});

$('#signup-email').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();
$('signup').val('Please Wait...');
		 add_user();
	}
	});
	
$('#signup-username').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();
$('signup').val('Please Wait...');
		 add_user();
	}
	});
	
function add_user(){

		
		var screen_name=document.getElementById('signup-username').value;
		screen_name=screen_name.trim();
		var userid=document.getElementById('signup-email').value;
		var pwd=document.getElementById('signup-password').value;
		pwd=pwd.trim();
	var flag_temp=0;
	
   	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   	if(screen_name.length>3){
	
	$('.usernameerr').css('color','#505260');
	$('.usernameerr').css('display','none');
	flag_temp=flag_temp+1;
	}
	else{
	
	$('.usernameerr').css('display','block');
	$('.usernameerr').css('color','red');
	
	}
	if(pwd.length>3){
	$('.passworderr').css('display','none');
	$('.passworderr').css('color','#505260');
	flag_temp=flag_temp+1;
	}else{
	//$('.passworderr').css('display','block');
	$('.passworderr').css('display','block');
	$('.passworderr').css('color','red');
	}
   	if  (!testEmail.test(userid)) {
		$('.emailerr').html('Please enter valid email id');
		$('.emailerr').css('display','block');
		$('.emailerr').css('color','red');
		
	}else{
		flag_temp=flag_temp+1;
	$('.emailerr').css('display','none');
	$('.emailerr').css('color','#505260');
	}
	
	if(flag_temp===3){
	user_register(screen_name,userid,pwd);
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
		$('#signin').val('Login');
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
		$('signup').val('Create account');
	    //console.log(t['hash']);
		if(t['response']==='olduser'){
		
		//document.getElementById('signup-email').value='';
		document.getElementById('signup-email').placeholder='email id already exists';
		$('.emailerr').html("email id already exists");
		$('.emailerr').css('color','red');
		$('.emailerr').css('display','block');
		
		}else{
		
	    /*sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['screen_name']=t['screen_name'];
		sessionStorage['status_code']='first_login';*/
	    window.location='thanks.html';
		}
	});  

}

