var user="";
var i=0,j=0;
var k=0,k1=0;
var design_collection=[2,7,8,14,19,20]; 
var random=0;


function display_link_count(userid){


 $.ajax({
        type: "POST",
		url: 'model/display_count.php',			
		data: {'by':userid}
       
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	//console.log(t.count);
	/*var text_val='<p>added link count '+t['count']+'</p>';
	text_val+='<p>you liked link count'+t['like_count']+'</p>';
	text_val+='<p>you added category '+t['cate_count']+'</p>';*/
	
	sessionStorage['site_cnt']=t['count'];
	sessionStorage['like_cnt']=t['like_count'];
	sessionStorage['cate_cnt']=t['cate_count'];
	
	
	   var text_val='<div class="accordion span3 place-left margin10" data-role="accordion" data-closeany="false">';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="profile_menu.html">added link count :<span id="site_c">'+sessionStorage['site_cnt']+'</span></a></div>	';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="profile_menu.html">you liked link count :<span id="like_c">'+sessionStorage['like_cnt']+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="profile_menu.html">you added category :<span id="cate_c">'+sessionStorage['cate_cnt']+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="help.html">Help</div><div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="team.html">About</div></div>';
 
	
	
	
	$('.cornertext').html(text_val);
	$('.cornertextsmall').html(text_val);
	}); 

}
function fetch_site(categorynames,userid){
var temp="";

 $.ajax({
        type: "POST",
		url: 'model/user_site.php',			
		data: {'category':categorynames,'user':userid}
       
   	}).done(function(result) {
	$('.loader').css('display','none');
	
	  result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	//console.log(t.count);
	//$('.count_'+categorynames).html(t.count);
	sessionStorage['site_size']=t.count;
	//$('.count_'+categorynames).html(sessionStorage['site_size']);
	for(var i=1;i<=t.count;i++){
	//console.log(t[i]);
	//t[i]=t[i].replace('\\','');
	t[i]=t[i].replace(/\\/g,'');
	
	var title_temp=t['desc'+i].replace(/ /g,'');
	if(title_temp===''){
	title_temp=t[i];
	}
	 temp+='<li> <a class="label" title='+title_temp+' href="http://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-ban-circle" uid='+categorynames+' id='+t[i]+' title="report '+t[i]+'"></i><i class="icon-thumbs-up" uid='+categorynames+' id='+t[i]+' title="like '+t[i]+'"></i><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t[i]+'"><i class="icon-facebook" title="share it on facebook"></i> </a> <a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t[i]+'"><i  class="icon-twitter" title="share it on twitter"></i> </a></li>';
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
	  //console.log(t['response']);
	  if((t['response'])==='newuser'){
	  //console.log(t['hash']);
	    //console.log(t['response']); 
		sessionStorage['hash']=t['hash'];
		sessionStorage['mail']=t['mail'];
		sessionStorage['screen_name']=t['screen_name'];
		sessionStorage['status_code']='first_login';
		window.location='menu.html';
	}
	 if((t['response'])==='olduser'){
	 $('.already').css('display','block');
	//console.log( "old user");
	}
	});  
}

function add_site(sitename,categoryname,user_name,visible){

$.ajax({
        type: "POST",
		url: 'model/add_site.php',			
		data: {'sitename':sitename,'category':categoryname,'user_name':user_name,'visible':visible}
   	}).done(function(result) {
	try{
	result = result.substring(2, result.length - 1);
     var t = JSON.parse(result);	
//	  $('.loader').css('display','none');
	  if(t['status']==='true'){
	sessionStorage['site_size']=parseInt(sessionStorage['site_size'])+1;
	$('.count_'+categoryname).html(sessionStorage['site_size']);
	
		sessionStorage['site_cnt']=parseInt(sessionStorage['site_cnt'])+1;
$('#site_c').text(sessionStorage['site_cnt']);


 $('.'+categoryname+'err').addClass('alert-info'); 
$('.'+categoryname).append('<li> <a class="label" href="http://'+sitename+'" target="_blank">'+sitename+'</a> <i class="icon-ban-circle" id="'+sitename+'" uid='+categoryname+' title="report'+sitename+'"></i> <i class="icon-thumbs-up" id="'+sitename+'" uid='+categoryname+' title="like'+sitename+'"></i><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+sitename+'"><i class="icon-facebook" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+sitename+'"> <i class="icon-twitter" title="share it on twitter"></i></a></li>');
$('.'+categoryname+'err').html('your link added successfully');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
}else{
$('.'+categoryname+'err').html('Error !!! Sorry try again');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
}
	}
	catch(err){
//	$('.loader').css('display','none');
		sessionStorage['site_size']=parseInt(sessionStorage['site_size'])+1;
	$('.count_'+categoryname).html(sessionStorage['site_size']);
	
		sessionStorage['site_cnt']=parseInt(sessionStorage['site_cnt'])+1;
$('#site_c').text(sessionStorage['site_cnt']);


 $('.'+categoryname+'err').addClass('alert-info'); 
$('.'+categoryname).append('<li> <a class="label" href="http://'+sitename+'" target="_blank">'+sitename+'</a> <i class="icon-ban-circle" id="'+sitename+'" uid='+categoryname+' title="report'+sitename+'"></i> <i class="icon-thumbs-up" id="'+sitename+'" uid='+categoryname+' title="like'+sitename+'"></i><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+sitename+'"><i class="icon-facebook" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+sitename+'"> <i class="icon-twitter" title="share it on twitter"></i></a></li>');
$('.'+categoryname+'err').html('link added successfully');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
	}
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
	  //console.log(result);
      var t = JSON.parse(result);	
	  //console.log("category size"+t['1']);	
   	 random=getRandomInt(0,6);
	 sessionStorage['category_count']=t['size'];
	for(id=1;id<=t['size'];id++){
	var category_name=t[id];
	sessionStorage['category'+[id]]=t[id];
	
	var html3='	<div class="ls_example" pid="'+category_name+'" >';
	html3+='	<nav class="cl-effect-'+design_collection[random]+'"> <a href="#" class="confirm"  id="'+category_name+'" class="box" data-tooltip="">';
	html3+='<span data-hover=" &nbsp; '+category_name+'" >'+category_name+'</span></a></nav></div>';
	$('.ls_mine').append(html3);

	var html= '<div class=" ls_demo lss_'+category_name+'" >'+category_name +'<i class="icon-remove scnt"></i> <hr><div class="ls_content ">	<ul class="'+category_name+'">';
	html+='</ul></div>';
	// code to generate add site feature to account holders  - start

	
	html+='	<hr>  <div class="new"> <table><tr><td class="first_td"> <p class="vis">Add new site</p><input type="text" name="site" ';
	html+='class="ls_site input-xlarge search-query" id="'+category_name+'text"  placeholder="type your link " >';
	html+='<button btnid="'+category_name+'" id="as" class="btn btn-primary ok">Add</button> <input type="hidden" id="'+ category_name +'" class="temp"/> &nbsp;'; html+='</td><td><br> <i class="icon-eye-open" title="who can see ?"></i>';
	html+='<select id="'+category_name+'visible" title="who can see ?" class="input-small btn-default"> <option selected value="Public">Public</option>';
	html+='<option value="me">Only Me</option></select></td></tr>';
	html+='<div class="loader"> <span class="l-1"></span><span class="l-2"></span><span class="l-3"></span><span class="l-4"></span>';
  html+='<span class="l-5"></span><span class="l-6"></span></div></p></div></table><br><p class="'+category_name+'err errmsg alert alert-dismissable alert-messages1 " >';
	
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
$('.loader').css('display','none');
	
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
	  $('.loader').css('display','none');
	   $('.'+category_temp+'err').removeClass('alert-info');
	    $('.'+category_temp+'err').removeClass('alert-danger');
	  if(t['replay']==='you liked'){
	  sessionStorage['like_cnt']=parseInt(sessionStorage['like_cnt'])+1;
	  $('#like_c').text(sessionStorage['like_cnt']);

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
	  $('.loader').css('display','none');
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


if(sessionStorage['status_code']==='first_login'){
$.bootbar.success("<p align='center'>Welcome "+sessionStorage['screen_name']+"</p>");
sessionStorage['status_code']='second_login';
} 

display_link_count(sessionStorage['mail']);


}else{

var temp_val='<p><label>User Name</label><input type="text" id="mailid" placeholder="mail id"/></p><p><label>Password</label><input type="password" id="pass" /></p>';
temp_val+='<p><button id="signin">SignIn</button></p>';

$('#add_category').css('display','none');
$('#profile').css('display','none');
if(sessionStorage['status_code']==='logout_first'){
$.bootbar.danger("<p align='center'>"+ sessionStorage['screen_name']+" you are logged out successfully</p>");
sessionStorage['status_code']='';
}else{
$.bootbar.success("<p align='center'>Welcome to Linksavers , Click the Category to view the Links</p>");
}
}

generate_category();

});

/* starting of  add new sites 	*/

$(document.body).on('mousedown','.ok',function(){
var categoryname =  $(this).attr( "btnid" );
addsite(categoryname);

});

/* starting of add sites while clicking enter button  */


$(document.body).on('keypress','.ls_site',function(e){

if (e.which == '13') {
		 e.preventDefault();
//alert('success');
var categoryname =  $(this).attr( "id" );
var strlen=categoryname.length;
categoryname=categoryname.replace(categoryname.substring(strlen-4,strlen),'');
//alert(categoryname);
addsite(categoryname);
 
	}
	else{
//	alert('wow');
	}
});


function addsite(categoryname){


$('.'+categoryname+'err').removeClass('alert-info');
$('.'+categoryname+'err').removeClass('alert-danger');
var sitename=document.getElementById(categoryname+'text').value;
sitename=sitename.replace(/ /g,'');

//t[i]=t[i].replace(/\\/g,'');


sitename=sitename.substring(sitename.indexOf("www."));

//alert(sitename);

if(sitename.length>5){
var visible=document.getElementById(categoryname+'visible').value;
if(visible=='me'){
visible=sessionStorage['mail'];}

 
if(sessionStorage['hash'])
{
var user=sessionStorage['mail'];
//console.log(visible);
$('.loader').css('display','block');
$('.'+categoryname+'err').html('Please wait !!!');
$('.'+categoryname+'err').css('display','block');
add_site(sitename,categoryname,user,visible);



}
else{  $('.'+categoryname+'err').addClass('alert-danger');
$('.'+categoryname+'err').html('please login to add ');
$('.'+categoryname+'err').css('display','block');}
}
else{ $('.'+categoryname+'err').addClass('alert-danger');
$('.'+categoryname+'err').html('please enter valid link ');
$('.'+categoryname+'err').css('display','block');}


	 


}

/* ending of  add new sites 	*/

/*   fetch sites when click category 	*/

$(document.body).on('mousedown','.ls_example',function(){
$('.loader').css('display','block');
var userid='';
var category_temp =  $(this).attr( "pid" );
if(sessionStorage['mail']){
userid=sessionStorage['mail'];}
else{  userid='';  }
var load_temp='<img src="img/Preloader.gif">';
$('.'+category_temp).html(load_temp);
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
$('.'+category_temp+'err').html('Please wait !!!');
$('.'+category_temp+'err').css('display','block');
$('.loader').css('display','block');
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
$('.'+cat_name+'err').html('Please wait !!!');
$('.'+cat_name+'err').css('display','block');
$('.loader').css('display','block');
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

/*
$(document.body).on('mousedown','.icon-facebook',function(){

var url=$(this).attr( "url" );
alert(url);

});

$(document.body).on('mousedown','.icon-twitter',function(){

var url=$(this).attr( "url" );
alert(url);

});*/

$(document.body).on('mousedown','.dark-tooltip',function(){
//alert('wow');
$('.dark-tooltip').removeClass('ls_active');
$(this).addClass('ls_removeopacity');
$(this).addClass('ls_active');
//var idd=$(this).attr('pid');
//$('.ls_demo').removeClass('ls_active');
//$('.lss_'+idd).addClass('ls_active');


});

$(document.body).on('mousedown','.scnt',function(){
//alert('wow');
$('.dark-tooltip').css('display','none');
});


$(document.body).on('mousedown','.confirm',function(){
//alert('wow');
$('.dark-tooltip').css('display','none');
});