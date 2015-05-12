 

function notification_list()
{   
	var user_name=localStorage.mail;
	
	
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/notification_list.php',			
		data: {'user':user_name}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  
	  // code to display added sites 
	  
		if(t.count===0){
		$('.ls_msg').append("No recent activity");
		
		}else{

	for(var i=1;i<=t.count;i++){	  
	//alert(t['msg'+i]);
	  	  t['msg'+i]=t['msg'+i].replace(/\\/g,'');
	  var msgs=t['msg'+i];
		//msgs=msgs.replace(/\./g,'_');
		//msgs=msgs.replace(/\//g,'_');
		
		
	temp='<p> '+msgs+'</p><hr>';

	 $('.ls_msg').append(temp);
	 
	}
}



//	$('.loader').css('display','none');
	});   
}





var i=0,j=0;

$(document).ready(function(){




if(localStorage.hash){
notification_list();
$('#ls_prof').html('Welcome '+localStorage.screen_name+'<i class="icon-star"></i>');

$('#ls_my').html(localStorage.screen_name+'<i class="icon-user"></i>');
}else{
window.location='home.html';
}



});


/*   logout   */

$('#logout').click(function(){
//alert('log out successfully');
if(localStorage.hash){
localStorage.hash='';
localStorage.mail='';
localStorage.screen_name='';
if(localStorage.status_code==='second_login'){
localStorage.status_code='logout_first';
}
window.location='index.html';
}else{

}
});

