
function getVariable(variable){

var query=window.location.search.substring(1);
var vars=query.split('&');
for(var i=0;i<vars.length;i++){
var pair=vars[i].split("=");
if(pair[0]==variable){
return pair[1]; }
}
return (false);

}


function user_details(user_name)
{   
	 var temp='';
     $.ajax({
        type: "POST",
		url: 'model/profile.php',			
		data: {'by':user_name}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  // code to display added sites 
	  for(var i=1;i<=t.count;i++){
	  t[i]=t[i].replace(/\\/g,'');
	  var add_class=t[i];
		add_class=add_class.replace(/\./g,'_');
		add_class=add_class.replace(/\//g,'_');
	  
	  t[i]=t[i].replace(/\\/g,'');
	  if(t['desc'+i]===''){
	  t['desc'+i]=t[i];
	  }
	  temp+='<li class="ad_'+add_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t[i]+'" target="_blank" title="'+t['desc'+i]+'">'+t[i]+'</a><i class="icon-remove-circle remove_sites ls_tooltip" title="remove '+ t[i]+'" id="'+t[i]+'"></i></i> <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t[i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t[i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i></a> </li>';
	}
	$('.added_site').html(temp);
	
	
	// code to display added categories
	 temp='';
	 for(var i=1;i<=t.cate_count;i++){
	// t[i]=t[i].replace(/\\/g,'');
	  temp+='<li class="c_'+t['cate'+i]+' linklbl"> '+t['cate'+i]+'<i class="icon-remove-circle remove_category ls_tooltip" title="remove '+ t['cate'+i]+'" id='+t['cate'+i]+'></i></li>';
	}
	$('.added_category').html(temp);
	
	// code to display liked sites 
	temp='';
	    for(var i=1;i<=t.like_count;i++){
		//t[i]=t[i].replace(/\\/g,'');
		t['likes'+i]=t['likes'+i].replace(/\\/g,'');
		var temp_class=t['likes'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['likes'+i]+'" title="'+t['likes'+i]+'" target="_blank">'+t['likes'+i]+'</a><i class="icon-thumbs-down ls_tooltip" title="dislike '+t['likes'+i]+'" id="'+t['likes'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['likes'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['likes'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> </li>';
	}
	$('.liked_site').html(temp);
	
	
	$('.flw_btn').css('display','none');
	
	 // code to display followed by 
	temp='';	
	for(var i=1;i<=t.by_count;i++){
	
	var temp_fl=t['by'+i];
		temp_fl=temp_fl.replace(/\./g,'_');
		temp_fl=temp_fl.replace(/\@/g,'_');
		temp_fl=temp_fl.replace(/\//g,'_');
	
	  temp+='<li class="fl_'+temp_fl+'"> <a class="linklbl ls_label label ls_tooltip" href="http://" target="_blank" title="'+t['byname'+i]+'">'+t['byname'+i]+'</a><i class="icon-remove-circle unfollow_user ls_tooltip" title="unfollow '+ t['byname'+i]+'" id="'+t['by'+i]+'"></i> </li>';
	}
	$('.followed_to').html(temp);
	
	
	 // code to display followed me 
	temp='';	
	for(var i=1;i<=t.to_count;i++){
	
	  temp+='<li class="ad_"> <a class="linklbl ls_label label ls_tooltip" href="http://" target="_blank" title="'+t['toname'+i]+'">'+t['toname'+i]+'</a> </li>';
	}
	$('.followed_by').html(temp);
	
	
	localStorage.t_count=t.count;
	localStorage.t_like_count=t.like_count;
	localStorage.t_cate_count=t.cate_count;
	localStorage.by_count=t.by_count;
	
	$('.ls_uname_title').text(localStorage.screen_name);
	$('#a').text(t.count);
	$('#b').text(t.like_count);
	$('#c').text(t.cate_count);
	$('#d').text(t.by_count);
	$('#e').text(t.to_count);
	$('.ad_ln_c').text(t.count);
	
	$('.flwto_ln_c').text(t.to_count);
	localStorage['amfollowing']=t.by_count;
	$('.flwby_ln_c').text(localStorage['amfollowing']);
	
	
			window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
//if(i==0){
  include('js/tooltip_main_profile.js', function() {
	
  })
	
	$('.loader').css('display','none');
	});   
}


function other_user_details(user_name)
{   
	var to=localStorage.mail;
	 var temp='';
     $.ajax({
        type: "POST",
		url: 'model/profile_other.php',			
		data: {'by':user_name,'to':to}       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  localStorage.otherusermail=user_name;
	  localStorage.otherusername=t.sname;
	  if(t.response==='av'){
	  $('.ls_uname_title').text(t.sname);
	 // $('.ls_uname_title').text(sessionStorage['screen_name']);
	  // code to display added sites 
	  var temp_like,temp_remove,title_temp,temp_cls,temp_cls1;
	  if(user_name===localStorage.mail){
	  temp_like='icon-thumbs-down';
	  temp_remove='icon-remove-circle';
	  title_temp='remove';
	  temp_cls='remove_sites';
	  temp_cls1='';
	  }else{
	  temp_like='icon-thumbs-up';
	  temp_remove='icon-thumbs-up';
	  title_temp='like';
	  temp_cls='like_site';
	  temp_cls1='like_sites';
	  }
	  
	  for(var i=1;i<=t.count;i++){
	  t[i]=t[i].replace(/\\/g,'');
	  var add_class=t[i];
		add_class=add_class.replace(/\./g,'_');
		add_class=add_class.replace(/\//g,'_');
	  
	  t[i]=t[i].replace(/\\/g,'');
	  if(t['desc'+i]===''){
	  t['desc'+i]=t[i];
	  }
	  
	  
	  temp+='<li class="ad_'+add_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t[i]+'" target="_blank" title="'+t['desc'+i]+'">'+t[i]+'</a><i class="'+temp_remove+' '+temp_cls+' ls_tooltip" title="'+title_temp+' '+ t[i]+'" id="'+t[i]+'"></i></i> <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t[i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t[i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i></a> </li>';
	}
	$('.added_site').html(temp);
	
	// code to display liked sites 
	temp='';
	    for(var i=1;i<=t.like_count;i++){
		//t[i]=t[i].replace(/\\/g,'');
		t['likes'+i]=t['likes'+i].replace(/\\/g,'');
		var temp_class=t['likes'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['likes'+i]+'" title="'+t['likes'+i]+'" target="_blank">'+t['likes'+i]+'</a><i class="'+temp_like+' '+temp_cls1+' ls_tooltip" title="'+title_temp+' '+t['likes'+i]+'" id="'+t['likes'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['likes'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['likes'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> </li>';
	}
	$('.liked_site').html(temp);
	
	$('.ls_hide').css('display','none');
	$('.ls_hide').css('display','none');
	
	
	
	
	 // code to display followed me 
	temp='';	
	for(var i=1;i<=t.to_count;i++){
	
	  temp+='<li class="ad_"> <a class="linklbl ls_label label ls_tooltip" href="http://" target="_blank" title="'+t['toname'+i]+'">'+t['toname'+i]+'</a> </li>';
	}
	$('.followed_by').html(temp);
	
	localStorage.follow_count=t.follow_count;
	if(user_name===localStorage.mail){
	$('.flw_btn').css('display','none');
	}
	if(t.follow_count===0){
	
		$('.flw_btn').html('follow');
	$('.flw_btn').addClass('btn-success');
	$('.flw_btn').removeClass('btn-danger');

	}else{
$('.flw_btn').text('unfollow');
	$('.flw_btn').addClass('btn-danger');
	$('.flw_btn').removeClass('btn-success');

	}
	
	
	localStorage.t_count=t.count;
	//sessionStorage['t_like_count']=t.like_count;
	//sessionStorage['t_cate_count']=t.cate_count;
	localStorage.by_counts=t.by_count;
    localStorage.to_counts=t.to_count;
	
	
	$('#a').text(t.count);
	$('#b').text(t.like_count);
	//$('#c').text(t.cate_count);
	//$('#d').text(t.by_count);
	//$('#e').text(t.to_count);
	
	$('.ad_ln_c').text(t.count);
	$('.flwto_ln_c').text(localStorage.to_counts);
	$('.flwby_ln_c').text(localStorage.by_counts);
	
	
			window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
//if(i==0){
  include('js/tooltip_main_profile.js', function() {
	
  })
	
	$('.loader').css('display','none');
	
	}else{
	
	window.location='error.html';
	}
	
	});   
	
}

function liked_site(alrt_flag,site_name,user){

$.ajax({
        type: "POST",
		url: 'model/liked_site.php',			
		data: {'sitename':site_name,'user':user}
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  $('.loader').css('display','none');
	  /* $('.'+category_temp+'err').removeClass('alert-info');
	    $('.'+category_temp+'err').removeClass('alert-danger');*/
	  if(t['replay']==='you liked'){
	 
	 $('.'+alrt_flag).removeClass('alert-danger');
	  $('.'+alrt_flag).addClass('alert-info');  
	  
	  }
	  else{
	  $('.'+alrt_flag).addClass('alert-danger');
	  $('.'+alrt_flag).removeClass('alert-info');
	  }
	  
	   
	$('.'+alrt_flag).html(t['replay']);
	//$('.'+category_temp+'err').css('display','block');
	
	}); 

}


function remove_site(site_name,user,tblname){
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'user':user,'tbl':tblname}
   	}).done(function(result) {	

	
	
	}); 
}


function follow_me()
{   
var follow_by=localStorage.mail;
var followed=localStorage.otherusermail;
var my_name=localStorage.screen_name;
var usr_name=localStorage.otherusername;
	var temp='';
     $.ajax({
        type: "POST",
		url: 'model/follow.php',			
		data: {'by':follow_by,'to':followed,'by_name':my_name,'to_name':usr_name}       
   	}).done(function(result) {
	  //result = result.substring(2, result.length - 1);
      //var t = JSON.parse(result);	
	  // code to display added sites 
	 


//	$('.loader').css('display','none');
	});   
}


function unfollow(usrid,user){
//alert(usrid +' : '+user);
$.ajax({

        type: "POST",
		url: 'model/unfollow.php',			
		data: {'touser':usrid,'byuser':user}
   	}).done(function(result) {	

	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  if(t.response==='av'){
	  localStorage.amfollowing=parseInt(localStorage.amfollowing)-1;
	$('.flwby_ln_c').text(localStorage['amfollowing']);
	
	localStorage.by_count=parseInt(localStorage.by_count)-1;
$('#d').text(localStorage.by_count);

$('.err4').addClass('alert-danger');
$('.err4').removeClass('alert-info');
$('.err4').text(' removed successfully');
}else{
$('.err4').addClass('alert-danger');
$('.err4').removeClass('alert-info');
$('.err4').text('please try again');
}
	
	}); 
}


var i=0,j=0,alrt_flag=0;
$(document).ready(function(){

if(localStorage.hash){
$('#ls_prof').html('Welcome '+localStorage.screen_name+'<i class="icon-star"></i>');

$('#ls_my').html(localStorage.screen_name+'<i class="icon-user"></i>');
var otherid=getVariable("id");
if(otherid){
//alert(otherid);
other_user_details(otherid);
}else{
user_details(localStorage.mail);
}
}else{
window.location='index.html';
}
});

/*    dislike sites    */
$(document.body).on('mousedown','.icon-thumbs-down',function(){
//$('.icon-thumbs-down').click( function(){
var site_name=this.id;
$('.err2').css('display','block'); 
//alert(site_name);
var user=localStorage.mail;
var tblname="likedsites";
remove_site(site_name,user,tblname);
site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.li_'+site_name).css('display','none');
//alert(site_name);
localStorage.t_like_count=parseInt(localStorage.t_like_count)-1;
$('#b').text(localStorage.t_like_count);
$('.err2').addClass('alert-danger');
	$('.err2').removeClass('alert-info');
	$('.err2').text('link removed successfully');
	
});

/*   remove sites   */
$(document.body).on('mousedown','.remove_sites',function(){

var site_name=this.id;
var user=localStorage.mail;
var tblname="sitelist";
remove_site(site_name,user,tblname);

site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.ad_'+site_name).css('display','none');


$('.err1').css('display','block');
localStorage.t_count=parseInt(localStorage.t_count)-1;
$('#a').text(localStorage.t_count);
$('.ad_ln_c').text(localStorage.t_count);

$('.err1').addClass('alert-danger');
	$('.err1').removeClass('alert-info');
	$('.err1').text('link removed successfully');
	
});

/*   remove category   */
$(document.body).on('mousedown','.remove_category',function(){
var category_name=this.id;

var user=localStorage.mail;
var tblname="categories";
remove_site(category_name,user,tblname);
$('.err3').css('display','block');

$('.c_'+category_name).css('display','none');

localStorage.t_cate_count=parseInt(localStorage.t_cate_count)-1;
$('#c').text(localStorage.t_cate_count);

$('.err3').addClass('alert-danger');
	$('.err3').removeClass('alert-info');
	$('.err3').text('link removed successfully');
	

});

// unfollow the user
$(document.body).on('mousedown','.unfollow_user',function(){
var usrid=this.id;

var user=localStorage['mail'];

unfollow(usrid,user);




var temp_fl=usrid;
		temp_fl=temp_fl.replace(/\./g,'_');
		temp_fl=temp_fl.replace(/\@/g,'_');
		temp_fl=temp_fl.replace(/\//g,'_');

$('.fl_'+temp_fl).css('display','none');

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



/*   follow & unfollow   */

$('.flw_btn').click(function(){


if(localStorage.follow_count==='0'){

follow_me();

localStorage.to_counts=parseInt(localStorage.to_counts)+1;
$('.flwto_ln_c').text(localStorage.to_counts);
localStorage.follow_count='1';
	$('.flw_btn').text('unfollow');
	$('.flw_btn').addClass('btn-danger');
	$('.flw_btn').removeClass('btn-success');
}else if(localStorage.follow_count==='1'){
var usrid1=localStorage.otherusermail;
var user1=localStorage.mail;

unfollow(usrid1,user1);

localStorage.to_counts=parseInt(localStorage.to_counts)-1;
$('.flwto_ln_c').text(localStorage.to_counts);
localStorage.follow_count='0';
	$('.flw_btn').html('follow');
	$('.flw_btn').addClass('btn-success');
	$('.flw_btn').removeClass('btn-danger');
}
});



/*   like sites 	*/

$(document.body).on('mousedown','.like_site',function(){



if(localStorage.mail){


var site_name=$(this).attr( "id" );
var user=localStorage.mail;

$('.err1').html('Please wait !!!');
alrt_flag='err1';
$('.loader').css('display','block');
liked_site(alrt_flag,site_name,user);


}
else{

}
});


/*   like sites 	*/

$(document.body).on('mousedown','.like_sites',function(){



if(localStorage.mail){

var site_name=$(this).attr( "id" );
var user=localStorage.mail;

$('.err2').html('Please wait !!!');

$('.loader').css('display','block');
 alrt_flag='err2';
liked_site(alrt_flag,site_name,user);

}
else{

}
});