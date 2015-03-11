var user_name,unf,unf1;

function user_list()
{   
	user_name=localStorage.mail;
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/user_list.php',			
		data: {'by':user_name}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  // code to display added sites 
	  
		  for( unf=1;unf<=t.fwcount;unf++){	  
	
	  
	 temp='<div class="span4 ls_u well user'+unf+'h" data-user="'+t["fwsname"+unf]+'">	<div class="row"><div class="span1"><a href="profile.html?id='+t["fwuname"+unf]+'" class="thumbnail">';
	 temp+='<img src="img/user.jpg" alt=""></a></div><div class="span3 ls_nm"><p usr="'+t["fwuname"+unf]+'">'+t["fwsname"+unf]+'</p>';
	 temp+='<span class=" badge badge-warning">'+t["fwsite"+unf]+' links</span> <span class=" badge badge-info">'+t["fwflwr"+unf]+' followers</span><br>';
	 temp+='<button btnid="'+t["fwsname"+unf]+'" class="ls_unflw ls_fwt btn-success " ls_usr="user'+unf+'">Following <i class="icon-ok">  </i></button><input type="hidden" id="unf_user'+unf+'" usr_id="'+t["fwuname"+unf]+'"/></div>	</div><p><span class="badge badge-success ls_info fwuser'+unf+'_info"></span></p></div>';


	 $('#content').append(temp);
	 
	}



	for( unf1=1;unf1<=t.count;unf1++){	  
	
	  
	 temp='<div class="span4 well ls_u f_cnt'+unf1+'" data-user="'+t["sname"+unf1]+'">	<div class="row"><div class="span1"><a href="profile.html?id='+t["uname"+unf1]+'" class="thumbnail">';
	 temp+='<img src="img/user.jpg" alt=""></a></div><div class="span3 ls_nm"><p usr="'+t["uname"+unf1]+'">'+t["sname"+unf1]+'</p>';
	 temp+='<span class=" badge badge-warning">'+t["site"+unf1]+' links</span> <span class=" badge badge-info">'+t["flwr"+unf1]+' followers</span><br>';
	 temp+='<button btnid="'+t["sname"+unf1]+'" class="ls_flw btn-primary ls_fwf" ls_usr="user'+unf1+'">Follow Me<i class="">  </i></button><input type="hidden" id="user'+unf1+'" usr_ids="'+t["uname"+unf1]+'"/></div>	</div><p><span class="badge badge-success ls_info user'+unf1+'_info"></span></p></div>';


	 $('#content1').append(temp);
	 
	}
//	$('.added_site').html(temp);



//	$('.loader').css('display','none');
	});   
}


function unfollow(usrid,user){

$.ajax({
        type: "POST",
		url: 'model/unfollow.php',			
		data: {'touser':usrid,'byuser':user}
   	}).done(function(result) {	
  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  if(t.response==='av'){
	  /*
	  unf1=unf1+1;

 var temp1='<div class="span4 well f_cnt'+unf1+'">	<div class="row"><div class="span1"><a href="http://www.linksavers.com" class="thumbnail">';
	 temp1+='<img src="img/user.jpg" alt=""></a></div><div class="span3 ls_nm"><p>'+usrid+'</p>';
	 temp1+='<span class=" badge badge-warning"> links</span> <span class=" badge badge-info"> followers</span><br>';
	 temp1+='<button btnid="'+usrid+'" class="ls_flw btn-primary ls_fwf" ls_usr="user'+unf1+'">Follow Me<i class="">  </i></button><input type="hidden" id="user'+unf1+'" usr_id="'+localStorage.screen_name+'"/></div>	</div><p><span class="badge badge-success ls_info user'+unf1+'_info"></span></p></div>';


	 $('#content1').append(temp1);*/
	  
	  }else{
	  
	  
	  
	  }
	
	
	}); 
}

function dynamic_user_list(q)
{   
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/dynamic_user_list.php',			
		data: {'by':q}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  // code to display added sites 
	  
	  for(var i=1;i<=t.count;i++){	  
	
	  
	 temp='<div class="span4 well">	<div class="row"><div class="span1"><a href="http://critterapp.pagodabox.com/others/admin" class="thumbnail">';
	 temp+='<img src="img/user.jpg" alt=""></a></div><div class="span3"><p>'+t["sname"+i]+'</p>';
	 temp+='<span class=" badge badge-warning">'+t["site"+i]+' links</span> <span class=" badge badge-info">'+t["flwr"+i]+' followers</span><br>';
	 temp+='<button btnid="n" class="ls_flw btn-primary " ls_usr="user'+i+'">Follow Me<i class="">  </i></button><input type="hidden" id="user'+i+'" usr_id="'+t["uname"+i]+'"/></div>	</div></div><br>';


	 $('#content').append(temp);
	 
	}
//	$('.added_site').html(temp);



//	$('.loader').css('display','none');
	});   
}




function follow_me(my_name,followed,follow_by,usr_name)
{   
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/follow.php',			
		data: {'by':follow_by,'to':followed,'by_name':my_name,'to_name':usr_name}       
   	}).done(function(result) {
	  //result = result.substring(2, result.length - 1);
      //var t = JSON.parse(result);	
	  // code to display added sites 
	  
	  
//	$('.added_site').html(temp);



//	$('.loader').css('display','none');
	});   
}


var i=0,j=0;

$(document).ready(function(){




if(localStorage.hash){
$('#ls_prof').html('Welcome '+localStorage.screen_name+'<i class="icon-star"></i>');

$('#ls_my').html(localStorage.screen_name+'<i class="icon-user"></i>');
user_list();
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

$(document.body).on('mousedown','.ls_flw',function(){
var follow_by;
var usr_flg=$(this).attr( "ls_usr" );

var followed=$('#'+usr_flg).attr( "usr_ids" );

if(localStorage.hash){
follow_by=localStorage.mail;
var usr_name=$(this).attr( "btnid" );
var my_name=localStorage.screen_name;
follow_me(my_name,followed,follow_by,usr_name);
$(this).html('Following');

$('.'+usr_flg+'_info').html('now you successfully following '+usr_name);
$('.'+usr_flg+'_info').css('display','block');

}else{
window.location='home.html';
}

});


$(document.body).on('mousedown','.ls_unflw',function(){
var follow_by;
var usr_flg=$(this).attr( "ls_usr" );
//alert(usr_flg);
var followed=$('#unf_'+usr_flg).attr( "usr_id" );
//alert(followed);
if(localStorage.hash){
follow_by=localStorage.mail;
var usr_name=$(this).attr( "btnid" );
var my_name=localStorage.screen_name;

$('.'+usr_flg+'h').css('display','none');
unfollow(followed,follow_by);



//unfollow_me(my_name,followed,follow_by,usr_name);
//$(this).html('Following');

//$('.'+usr_flg+'_info').html('now you successfully following '+usr_name);
//$('.'+usr_flg+'_info').css('display','block');

}else{
window.location='home.html';
}

});


$(document.body).on('mouseover','.ls_fwt',function(){

$(this).html('Unfollow <i class="icon-remove"></i>');
$(this).removeClass('btn-success');
$(this).addClass('btn-danger');

});

$(document.body).on('mouseout','.ls_fwt',function(){

$(this).html('Following <i class="icon-ok"></i>');
$(this).removeClass('btn-danger');
$(this).addClass('btn-success');
});

$(document.body).on('mouseover','.ls_fwf',function(){

$(this).html('Follow Me <i class="icon-ok"></i>');
$(this).removeClass('btn-primary');
$(this).addClass('btn-success');
});

$(document.body).on('mouseout','.ls_fwf',function(){

$(this).html('Follow Me');
$(this).removeClass('btn-success');
$(this).addClass('btn-primary');
});

$(document.body).on('mousedown','#btn',function(){
var q=$('#ser').val();
alert(q);
dynamic_user_list(q);

});

$(document.body).on('mousedown','.span3 p',function(){
var urls=$(this).attr( "usr" );
//alert(urls);
//alert(q);
window.location='profile.html?id='+urls;

});