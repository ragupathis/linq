function notification_list()
{   
	var user_name=localStorage.mail;	
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/notification_list1.php',			
		data: {'user':user_name}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var result = JSON.parse(result);
	 $('#templ').tmpl(result).appendTo('.timeline');
	 //$('#templ').tmpl(result).appendTo('ul');
	});   
}

notification_list();

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

