var user="";
var i=0,j=0;
var k=0,k1=0;
var design_collection=[2,7,8,12,14,19,20]; 
var random=0;
function fetch_site(categorynames,userid){
var temp="";

 $.ajax({
        type: "POST",
		url: 'model/user_site.php',			
		data: {'category':categorynames,'user':userid}
       
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	console.log(t.count);
	
	for(var i=1;i<=t.count;i++){
	console.log(t[i]);
	 temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-ban-circle" uid='+categorynames+' id='+t[i]+' title="report '+t[i]+'"></i><i class="icon-thumbs-up" uid='+categorynames+' id='+t[i]+' title="like '+t[i]+'"></i></li>';
	}
	$('.'+categorynames).html(temp);
	});  
}


function signup_data(newmail,newpass){
var temp="";
 $.ajax({
        type: "POST",
		url: 'model/sign_up.php',			
		data: {'user_id':newmail,'password':newpass}
		
   	}).done(function(result) {
	
	  result = result.substring(1, result.length - 1);
     var t = JSON.parse(result);	
	  console.log(t['response']);
	  if((t['response'])==='newuser'){
	  console.log(t['hash']);
	    console.log(t['response']); 
		sessionStorage['hash']=t['hash'];
		sessionStorage['mail']=t['mail'];
		sessionStorage['screen_name']=t['screen_name'];
		sessionStorage['status_code']='first_login';
		window.location='menu.html';
	}
	 if((t['response'])==='olduser'){
	 $('.already').css('display','block');
	console.log( "old user");
	}
	});  
}

function add_site(sitename,categoryname,user_name,visible){

$.ajax({
        type: "POST",
		url: 'model/add_site.php',			
		data: {'sitename':sitename,'category':categoryname,'user_name':user_name,'visible':visible}
   	}).done(function(result) {
	}); 
	
}
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min )) + min;
    }
function generate_category(){
var user_names;
if(sessionStorage['mail']){
 user_names=sessionStorage['mail'];
}else{    user_names='a'; }
$.ajax({
        type: "POST",
		
		url: 'model/display_category.php',			   
		data: {'user':user_names}
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
	  console.log(result);
      var t = JSON.parse(result);	
	  //console.log("category size"+t['1']);	
   	 random=getRandomInt(0,7);
	for(id=1;id<=t['size'];id++){
	var category_name=t[id];
	var html3='	<div class="example" pid="'+category_name+'">';
	html3+='	<nav class="cl-effect-'+design_collection[random]+'"> <a href="#" class="confirm"  id="'+category_name+'" class="box" data-tooltip="">';
	html3+='<span data-hover=" &nbsp; '+category_name+'" >'+category_name+'</span></a></nav></div>';
	$('body').append(html3);

	var html= '<div class="demo">'+category_name+' <hr><div class="content">	<ul class="'+category_name+'">';
	html+='</ul></div>';
	// code to generate add site feature to account holders  - start

	//if(user){
	html+='	<hr>  <div class="new"> <table><tr><td class="first_td"> <p class="vis">Add new site</p><input type="text" name="site" ';
	html+='class="site input-xlarge search-query" id="'+category_name+'text"  placeholder="www.guvi.in" >';
	html+='<button btnid="'+category_name+'" id="as" class="btn btn-primary ok">Add</button> <input type="hidden" id="'+ category_name +'" class="temp"/> &nbsp;'; html+='</td><td><br> <i class="icon-eye-open" title="who can see ?"></i>';
	html+='<select id="'+category_name+'visible" title="who can see ?" class="input-small btn-default"> <option selected value="Public">Public</option>';
	html+='<option value="me">Only Me</option></select></td></tr></table><br><p class="'+category_name+'err errmsg alert alert-dismissable alert-messages1 " >';
	html+='Please Login to add </p></div>';
	// code to generate add site feature to account holders - end 
	$("#"+category_name).attr('data-tooltip',html);
	}
	window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
//if(i==0){
  include('js/jquery.darktooltip1.js', function() {
	include('js/examples.js');
	//alert('in');
	i=1;
  })
  
//}	
}); 

}

function liked_site(category_temp,site_name,user){
$.ajax({
        type: "POST",
		url: 'model/liked_site.php',			
		data: {'sitename':site_name,'user':user}
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	   $('.'+category_temp+'err').removeClass('alert-info');
	    $('.'+category_temp+'err').removeClass('alert-danger');
	  if(t['replay']==='you liked'){
	  $('.'+category_temp+'err').addClass('alert-info');  }
	  else{
	  $('.'+category_temp+'err').addClass('alert-danger');
	  }
	$('.'+category_temp+'err').html(t['replay']);
	$('.'+category_temp+'err').css('display','block');
	
	}); 

}


function report_site(cat_name,site_name,user){
$.ajax({
        type: "POST",
		url: 'model/report_site.php',			
		data: {'sitename':site_name,'user':user}
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  $('.'+cat_name+'err').removeClass('alert-info');
	    $('.'+cat_name+'err').removeClass('alert-danger');
	  if(t['replay']==='you reported'){
	  $('.'+cat_name+'err').addClass('alert-info');  }
	  else{
	  $('.'+cat_name+'err').addClass('alert-danger');
	  }
	$('.'+cat_name+'err').html(t['replay']);
	$('.'+cat_name+'err').css('display','block');
	}); 

}


$(document).ready(function(){

if(sessionStorage['hash']){
//document.getElementById('logout').innerHTML='<p id="testi"><span class="icon-off"></span>logout</p>';
//$('#logout').css('display','block');
//$('#signup').css('display','none');
//$('.username').html('<span class="icon-user"></span> &nbsp; '+sessionStorage['mail']);



if(sessionStorage['status_code']==='first_login'){
$.bootbar.success("<p align='center'>Welcome "+sessionStorage['screen_name']+"</p>");
sessionStorage['status_code']='second_login';
}
}else{

var temp_val='<p><label>User Name</label><input type="text" id="mailid" placeholder="mail id"/></p><p><label>Password</label><input type="password" id="pass" /></p>';
temp_val+='<p><button id="signin">SignIn</button></p>';
/*
document.getElementById('logout').innerHTML='<span class="icon-circle-arrow-down"></span>login';
document.getElementById('forms').innerHTML=temp_val;
*/

//$('#login').css('display','block');
//$('#logout').css('display','none');

$('#add_category').css('display','none');
$('#profile').css('display','none');
if(sessionStorage['status_code']==='logout_first'){
$.bootbar.danger("<p align='center'>"+ sessionStorage['screen_name']+" you are logged out successfully</p>");
sessionStorage['status_code']='';
}else{
$.bootbar.success("<p align='center'>Thanks for visiting , Click the Category to get the Links and give feedback</p>");
}
}

generate_category();

});

/* starting of  add new sites 	*/

$(document.body).on('mousedown','.ok',function(){
var categoryname =  $(this).attr( "btnid" );
addsite(categoryname);


});


function addsite(categoryname){


$('.'+categoryname+'err').removeClass('alert-info');
$('.'+categoryname+'err').removeClass('alert-danger');
var sitename=document.getElementById(categoryname+'text').value;
if(sitename.length>5){
var visible=document.getElementById(categoryname+'visible').value;
if(visible=='me'){
visible=sessionStorage['mail'];}

 
if(sessionStorage['hash'])
{
var user=sessionStorage['mail'];
//console.log(visible);
add_site(sitename,categoryname,user,visible);
 $('.'+categoryname+'err').addClass('alert-info'); 
$('.'+categoryname).append('<li> <a href="https://'+sitename+'" target="_blank">'+sitename+'</a><i class="icon-thumbs-up" uid='+sitename+' id='+sitename+' title="like '+sitename+'"></i></li>');
$('.'+categoryname+'err').html('your link added successfully');
$('.'+categoryname+'err').css('display','block');
}else{  $('.'+categoryname+'err').addClass('alert-danger');
$('.'+categoryname+'err').html('please login to add ');
$('.'+categoryname+'err').css('display','block');}
}
else{ $('.'+categoryname+'err').addClass('alert-danger');
$('.'+categoryname+'err').html('please enter valid link ');
$('.'+categoryname+'err').css('display','block');}


	 


}

/* ending of  add new sites 	*/

/*   fetch sites when click category 	*/

$(document.body).on('mousedown','.example',function(){
var userid='';
var category_temp =  $(this).attr( "pid" );
if(sessionStorage['mail']){
userid=sessionStorage['mail'];}
else{  userid='';  }
fetch_site(category_temp,userid);
});

/*   like sites 	*/

$(document.body).on('mousedown','.icon-thumbs-up',function(){
var cat_name=$(this).attr( "uid" );
if(sessionStorage['mail']){
//alert(site_name);
var site_name=$(this).attr( "id" );
var user=sessionStorage['mail'];
var category_temp =  $(this).attr( "uid" );
liked_site(category_temp,site_name,user);
}
else{
$('.'+cat_name+'err').addClass('alert-danger');
$('.'+cat_name+'err').html('please login to like ');
$('.'+cat_name+'err').css('display','block');
}
});

/*   report site	*/

$(document.body).on('mousedown','.icon-ban-circle',function(){
var cat_name=$(this).attr( "uid" );
if(sessionStorage['mail']){
var site_name=$(this).attr( "id" );
//alert(site_name);
var user=sessionStorage['mail'];
report_site(cat_name,site_name,user);

}
else{
$('.'+cat_name+'err').addClass('alert-danger');
$('.'+cat_name+'err').html('please login to report ');
$('.'+cat_name+'err').css('display','block');
}
});

/*  navigate to profile page  */

$(document.body).on('mousedown','#profile',function(){
if(sessionStorage['hash']){
window.location='profile_new.html';
}
});
$(document.body).on('mousedown','.username',function(){
if(sessionStorage['hash']){
window.location='profile_new.html';
}
});

/*   logout   */ 

$(document.body).on('mousedown','#logout',function(){
//alert('log out successfully');
if(sessionStorage['hash']){
sessionStorage['hash']='';
sessionStorage['mail']='';
sessionStorage['screen_name']='';
if(sessionStorage['status_code']==='second_login'){
sessionStorage['status_code']='logout_first';
}
window.location='menu.html';
}else{

}
});

function signup_details(){
var newmail=document.getElementById('newmail').value;
var password=document.getElementById('newpass1').value;
signup_data(newmail,password);
}

$("#signup_btn").click(function(){
//alert('signup successfully');
signup_details();
});


