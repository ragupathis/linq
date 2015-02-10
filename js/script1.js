var cate_temp=0,desc_temp=0;
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
	  temp+='<li class="ad_'+add_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t[i]+'" target="_blank" title="'+t['desc'+i]+'">'+t[i]+'</a><i class="icon-remove-circle remove_sites ls_tooltip" title="remove '+ t[i]+'" id="'+t[i]+'" uid="'+t['cate'+i]+'"></i></i> <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t[i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t[i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i></a><a target=_blank" href="whatsapp://send?text='+t[i]+' from www.linksavers.com"><i class="icon-phone ls_tooltip" title="Share it on WhatsApp"></i></a> </li>';
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
		var temp_cate=t['likes_cate'+i];
		var temp_desc=t['likes_desc'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['likes'+i]+'" title="'+t['likes_desc'+i]+'" target="_blank">'+t['likes'+i]+'</a><i class="icon-thumbs-down unlike_site ls_tooltip" title="dislike '+t['likes'+i]+'" id="'+t['likes'+i]+'" cate="'+t['likes_cate'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['likes'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['likes'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> <a target=_blank" href="whatsapp://send?text='+t['likes'+i]+' from www.linksavers.com"><i class="icon-phone ls_tooltip" title="Share it on WhatsApp"></i></a></li>';
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
	
	  temp+='<li class="fl_'+temp_fl+'"> <a class="linklbl ls_label label ls_tooltip" href="profile.html?id=" target="_blank" title="'+t['byname'+i]+'">'+t['byname'+i]+'</a><i class="icon-remove-circle unfollow_user ls_tooltip" title="unfollow '+ t['byname'+i]+'" id="'+t['by'+i]+'"></i> </li>';
	}
	$('.followed_to').html(temp);
	
	
	 // code to display followed me 
	temp='';	
	for(var i=1;i<=t.to_count;i++){
	
	  temp+='<li class="ad_"> <a class="linklbl ls_label label ls_tooltip" href="profile.html?id=" target="_blank" title="'+t['toname'+i]+'">'+t['toname'+i]+'</a> </li>';
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
	  t['a'+i]=t['a'+i].replace(/\\/g,'');
	  var add_class=t['a'+i];
		add_class=add_class.replace(/\./g,'_');
		add_class=add_class.replace(/\//g,'_');
	  
	  t['a'+i]=t['a'+i].replace(/\\/g,'');
	  if(t['a_d'+i]===''){
	  t['a_d'+i]=t['a'+i];
	  }
	  
	  
	  temp+='<li class="ad_'+add_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['a'+i]+'" target="_blank" title="'+t['a_d'+i]+'">'+t['a'+i]+'</a><i class="icon-thumbs-up like_site1 ls_tooltip" title="'+title_temp+' '+ t['a'+i]+'" id="'+t['a'+i]+'" uid="'+t['a_c'+i]+'" t_dec="'+t['a_d'+i]+'"></i></i> <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['a'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['a'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i></a> </li>';
	}
	/*   to display me liked sites which is added by him  */
	  for(var i=1;i<=t.n_count;i++){
	  t['b'+i]=t['b'+i].replace(/\\/g,'');
	  var add_class=t['b'+i];
		add_class=add_class.replace(/\./g,'_');
		add_class=add_class.replace(/\//g,'_');
	  
	  t['b'+i]=t['b'+i].replace(/\\/g,'');
	  if(t['b_d'+i]===''){
	  t['b_d'+i]=t['b'+i];
	  }
	  
	  
	  temp+='<li class="ad_'+add_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['b'+i]+'" target="_blank" title="'+t['b_d'+i]+'">'+t['b'+i]+'</a><i class="'+'icon-thumbs-down'+'  ls_tooltip unlike_site1" title="dislike '+ t['b'+i]+'" id="'+t['b'+i]+'" uid="'+t['b_c'+i]+'" t_dec="'+t['b_d'+i]+'"></i></i> <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['b'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['b'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i></a> </li>';
	}
	
	
	$('.added_site').html(temp);
	
	/*  to display him liked sites which is added by me  */
	temp='';
	    for(var i=1;i<=t.l1_count;i++){
		//t[i]=t[i].replace(/\\/g,'');
		t['c'+i]=t['c'+i].replace(/\\/g,'');
		var temp_class=t['c'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['c'+i]+'" title="'+t['c_d'+i]+'" target="_blank">'+t['c'+i]+'</a><i class="'+'icon-remove-circle'+' remove_othr_site ls_tooltip" title="'+'remove '+' '+t['c'+i]+'" id="'+t['c'+i]+'" cate="'+t['c_c'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['c'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['c'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> </li>';
	}
	
		/* to display him liked sites which is liked by me */
	    for(var i=1;i<=t.l2_count;i++){
		//t[i]=t[i].replace(/\\/g,'');
		t['d'+i]=t['d'+i].replace(/\\/g,'');
		var temp_class=t['d'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['d'+i]+'" title="'+t['d_d'+i]+'" target="_blank">'+t['d'+i]+'</a><i class="'+'icon-thumbs-up'+' like_site1  ls_tooltip" title="like '+t['d'+i]+'" id="'+t['d'+i]+'" uid="'+t['d_c'+i]+'" t_dec="'+t['d_d'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['d'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['d'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> </li>';
	}
	
	/* to display him liked sites which is not related to me */
	    for(var i=1;i<=t.l3_count;i++){
		//t[i]=t[i].replace(/\\/g,'');
		t['e'+i]=t['e'+i].replace(/\\/g,'');
		var temp_class=t['e'+i];
		temp_class=temp_class.replace(/\./g,'_');
		temp_class=temp_class.replace(/\//g,'_');
	    //console.log(t[i]);
	    temp+='<li class="li_'+temp_class+'"> <a class="linklbl ls_label label ls_tooltip" href="http://'+t['e'+i]+'" title="'+t['e_d'+i]+'" target="_blank">'+t['e'+i]+'</a><i class="'+'icon-thumbs-down'+' unlike_site1 ls_tooltip" title="dislike '+t['e'+i]+'" id="'+t['e'+i]+'"  uid="'+t['e_c'+i]+'" t_dec="'+t['e_d'+i]+'"></i></i>  <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['e'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['e'+i]+'">  <i class="icon-twitter ls_tooltip" title="share it on twitter"></i> </li>';
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
	
	
	localStorage.t_count=t.tot_count;
	//sessionStorage['t_like_count']=t.like_count;
	//sessionStorage['t_cate_count']=t.cate_count;
	localStorage.by_counts=t.by_count;
    localStorage.to_counts=t.to_count;
	
	
	$('#a').text(t.tot_count);
	$('#b').text(t.like_count);
	//$('#c').text(t.cate_count);
	//$('#d').text(t.by_count);
	//$('#e').text(t.to_count);
	
	$('.ad_ln_c').text(t.tot_count);
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

function liked_site(alrt_flag,site_name,user,desc,cate){
//alert(desc);
//alert(cate);
$.ajax({
        type: "POST",
		url: 'model/liked_site.php',			
		data: {'sitename':site_name,'user':user,'desc':desc,'category':cate}
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

function disliked_site(flag1,category_tem,site_name,user){
var tblname="likedsites";	
//alert(category_tem+' - '+site_name+' - '+user+' - '+tblname)
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'cate':category_tem,'user':user,'tbl':tblname}
   	}).done(function(result) {	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  $('.loader').css('display','none');
	  /*$('.'+category_temp+'err').removeClass('alert-info');
	  $('.'+category_temp+'err').removeClass('alert-danger');*/
	  if(t['replay']==='you disliked'){
		  if(flag1==='mine'){
	  localStorage.like_cnt=parseInt(localStorage.like_cnt)-1;
      $('.like_c').html(localStorage.like_cnt);
	  site_name=site_name.replace(/\./g,'_');
	  site_name=site_name.replace(/\//g,'_');
	  $('.li_'+site_name).css('display','none');
//alert(site_name);
	  localStorage.t_like_count=parseInt(localStorage.t_like_count)-1;
	  $('#b').text(localStorage.t_like_count);
		  }
	  //$('.'+category_temp+'err').addClass('alert-info'); 
	  }
	  else{
	  //$('.'+category_temp+'err').addClass('alert-danger');
	  }
	//$('.'+category_temp+'err').html(t['replay']);
	//$('.'+category_temp+'err').css('display','block');
	}); 
}

function remove_site(site_name,user,tblname,cate_name){
	//alert('my '+cate_name);
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'user':user,'tbl':tblname,'cate':cate_name}
   	}).done(function(result) {	

	
	
	}); 
}

function remove_cate(site_name,user,tblname){
	//alert(cate_name);
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


function unfollow(flag,usrid,user){
//alert(usrid +' : '+user);
$.ajax({

        type: "POST",
		url: 'model/unfollow.php',			
		data: {'touser':usrid,'byuser':user}
   	}).done(function(result) {	

	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  if(t.response==='av'){
		if(flag==='mine'){
	localStorage.amfollowing=parseInt(localStorage.amfollowing)-1;
	$('.flwby_ln_c').text(localStorage['amfollowing']);
	
	localStorage.by_count=parseInt(localStorage.by_count)-1;
$('#d').text(localStorage.by_count);
		}
/*
$('.err4').addClass('alert-danger');
$('.err4').removeClass('alert-info');
$('.err4').text(' removed successfully');
*/
}else{
/*$('.err4').addClass('alert-danger');
$('.err4').removeClass('alert-info');
$('.err4').text('please try again');*/
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
window.location='home.html';
}
});

/*    dislike sites    */
$(document.body).on('mousedown','.unlike_site',function(){
//$('.icon-thumbs-down').click( function(){
var site_name=this.id;
$(this).removeClass('icon-thumbs-down');
$(this).addClass('icon-thumbs-up');

$(this).removeClass('unlike_site');
$(this).addClass('like_site');

//$('.err2').css('display','block'); 
//alert(site_name);
var user=localStorage.mail;
var tblname="likedsites";
cate_name=$(this).attr( "cate" );
//remove_site(site_name,user,tblname,cate_name);
var flag1='mine';
disliked_site(flag1,cate_name,site_name,user);
/*	site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.li_'+site_name).css('display','none');
//alert(site_name);
localStorage.t_like_count=parseInt(localStorage.t_like_count)-1;
$('#b').text(localStorage.t_like_count);	*/
/*$('.err2').addClass('alert-danger');
	$('.err2').removeClass('alert-info');
	$('.err2').text('link removed successfully');
*/	
});

/*   remove sites   */
$(document.body).on('mousedown','.remove_sites',function(){

var site_name=this.id;
var user=localStorage.mail;
var tblname="sitelist";
var cate_name=$(this).attr( "uid" );

remove_site(site_name,user,tblname,cate_name);

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
remove_cate(category_name,user,tblname);
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
var flag='mine';   // to check unfollow in my profile
unfollow(flag,usrid,user);




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
var flag='other';	 // to check unfollow in other profile
unfollow(flag,usrid1,user1);

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
desc_temp=$(this).attr( "t_dec" );
cate_temp=$(this).attr( "uid" );
$(this).removeClass('icon-thumbs-up');
$(this).addClass('icon-thumbs-down');

$(this).removeClass('like_site');
$(this).addClass('unlike_site');
liked_site(alrt_flag,site_name,user,desc_temp,cate_temp);

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
desc_temp=$(this).attr( "uid" );
cate_temp=$(this).attr( "t_dec" );
$(this).removeClass('icon-thumbs-up');
$(this).addClass('icon-thumbs-down');

$(this).removeClass('ls_up');
$(this).addClass('ls_down');
liked_site(alrt_flag,site_name,user,desc_temp,cate_temp);

}
else{

}
});

$(document.body).on('mousedown','.like_site1',function(){



if(localStorage.mail){


var site_name=$(this).attr( "id" );
var user=localStorage.mail;

$(this).removeClass('like_site1');
$(this).addClass('unlike_site1');

$('.err1').html('Please wait !!!');
alrt_flag='err1';
$('.loader').css('display','block');
desc_temp=$(this).attr( "t_dec" );
cate_temp=$(this).attr( "uid" );
$(this).removeClass('icon-thumbs-up');
$(this).addClass('icon-thumbs-down');


liked_site(alrt_flag,site_name,user,desc_temp,cate_temp);

}
else{

}
});

/*    dislike sites    */

/* to delete a site which is added by me and liked by he */
$(document.body).on('mousedown','.remove_othr_site',function(){

var site_name=this.id;
var user=localStorage.mail;
var tblname="sitelist";
var cate_name=$(this).attr( "cate" );

remove_site(site_name,user,tblname,cate_name);

site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.li_'+site_name).css('display','none');

});
/*  unlike site */
$(document.body).on('mousedown','.unlike_site1',function(){
//$('.icon-thumbs-down').click( function(){
var site_name=this.id;
$(this).removeClass('icon-thumbs-down');
$(this).addClass('icon-thumbs-up');

$(this).removeClass('unlike_site');
$(this).addClass('like_site');

//$('.err2').css('display','block'); 
//alert(site_name);
var user=localStorage.mail;
var tblname="likedsites";
cate_name=$(this).attr( "uid" );
//remove_site(site_name,user,tblname,cate_name);
var flag1='other';
disliked_site(flag1,cate_name,site_name,user);
/*	site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.li_'+site_name).css('display','none');
//alert(site_name);
localStorage.t_like_count=parseInt(localStorage.t_like_count)-1;
$('#b').text(localStorage.t_like_count);	*/
/*$('.err2').addClass('alert-danger');
	$('.err2').removeClass('alert-info');
	$('.err2').text('link removed successfully');
*/	
});