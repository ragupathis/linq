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
	 temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-thumbs-up" uid='+t[i]+' id='+t[i]+' title="like '+t[i]+'"></i></li>';
	}
	$('.'+categorynames).html(temp);
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

$.ajax({
        type: "POST",
		url: 'model/display_category.php',			   
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
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
	html+='<button btnid="'+category_name+'" class="btn btn-primary ok">Add</button> &nbsp; </td><td><br> <i class="icon-eye-open" title="who can see ?"></i>';
	html+='<select id="'+category_name+'visible" title="who can see ?" class="input-small btn-default"> <option selected value="Public">Public</option>';
	html+='<option value="me">Only Me</option></select></td></tr></table><br><p class="'+category_name+'err errmsg" >';
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

function liked_site(site_name,user){
$.ajax({
        type: "POST",
		url: 'model/liked_site.php',			
		data: {'sitename':site_name,'user':user}
   	}).done(function(result) {
	$('.errmsg').html('u liked');
	$('.errmsg').css('display','block');
	}); 

}

$(document).ready(function(){

if(sessionStorage['hash']){
document.getElementById('status').innerHTML='<p id="testi"><span class="icon-off"></span>logout</p>';
$('.username').html('<span class="icon-user"></span> &nbsp; '+sessionStorage['mail']);
if(sessionStorage['status_code']==='first_login'){
$.bootbar.success("Welcome "+sessionStorage['mail']);
sessionStorage['status_code']='second_login';
}
}else{
document.getElementById('status').innerHTML='<span class="icon-circle-arrow-down"></span>login';
$('.my').css('display','none');
$('#profile').css('display','none');
if(sessionStorage['status_code']==='logout_first'){
$.bootbar.danger("you logged out successfully");
sessionStorage['status_code']='';
}
}

generate_category();

});

/*   add new sites 	*/

$(document.body).on('mousedown','.ok',function(){

var categoryname =  $(this).attr( "btnid" );
sitename=document.getElementById(categoryname+'text').value;
var visible=document.getElementById(categoryname+'visible').value;
if(visible=='me'){
visible=sessionStorage['mail'];}
if(sessionStorage['hash']){
var user=sessionStorage['mail'];
//console.log(visible);
add_site(sitename,categoryname,user,visible);

$('.'+categoryname).append('<li> <a href="https://'+sitename+'" target="_blank">'+sitename+'</a><i class="icon-thumbs-up" uid='+sitename+' id='+sitename+' title="like '+sitename+'"></i></li>');
$('.'+categoryname+'err').html('your link added successfully');
$('.'+categoryname+'err').css('display','block');
}else{
$('.'+categoryname+'err').html('please login to add ');
$('.'+categoryname+'err').css('display','block');}
});

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
if(sessionStorage['mail']){
var site_name=$(this).attr( "uid" );
//alert(site_name);
var user=sessionStorage['mail'];
liked_site(site_name,user);
}
else{
$('.errmsg').html('please login to like ');
$('.errmsg').css('display','block');
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

$(document.body).on('mousedown','#testi',function(){
//alert('log out successfully');
sessionStorage['hash']='';
sessionStorage['mail']='';
if(sessionStorage['status_code']==='second_login'){
sessionStorage['status_code']='logout_first';
}
window.location='main.html';
});