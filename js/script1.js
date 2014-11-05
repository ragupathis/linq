

function user_details(user_name)
{    var temp='';
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
	
	sessionStorage['t_count']=t.count;
	sessionStorage['t_like_count']=t.like_count;
	sessionStorage['t_cate_count']=t.cate_count;
	
	$('#a').text(t.count);
	$('#b').text(t.like_count);
	$('#c').text(t.cate_count);
	
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


function remove_site(site_name,user,tblname){
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'user':user,'tbl':tblname}
   	}).done(function(result) {	
	
	
	
	
	}); 
}

var i=0,j=0;
$(document).ready(function(){

if(sessionStorage['hash']){
//$('.username').html('<span class="icon-user"></span> &nbsp; '+ sessionStorage['mail']);
document.getElementById('pro_name').innerHTML='Welcome '+sessionStorage['screen_name']+'<i class="icon-user-md"></i>';
user_details(sessionStorage['mail']);
}else{
window.location='index.html';
}
});

/*    dislike sites    */

$('.icon-thumbs-down').live('click', function(){
var site_name=this.id;
$('.err2').css('display','block'); 
//alert(site_name);
var user=sessionStorage['mail'];
var tblname="likedsites";
remove_site(site_name,user,tblname);
site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.li_'+site_name).css('display','none');
//alert(site_name);
sessionStorage['t_like_count']=parseInt(sessionStorage['t_like_count'])-1;
$('#b').text(sessionStorage['t_like_count']);

});

/*   remove sites   */

$('.remove_sites').live('click', function(){
var site_name=this.id;
var user=sessionStorage['mail'];
var tblname="sitelist";
remove_site(site_name,user,tblname);

site_name=site_name.replace(/\./g,'_');
site_name=site_name.replace(/\//g,'_');
$('.ad_'+site_name).css('display','none');


$('.err1').css('display','block');
sessionStorage['t_count']=parseInt(sessionStorage['t_count'])-1;
$('#a').text(sessionStorage['t_count']);

});

/*   remove category   */

$('.remove_category').live('click', function(){
var category_name=this.id;

var user=sessionStorage['mail'];
var tblname="categories";
remove_site(category_name,user,tblname);
$('.err3').css('display','block');

$('.c_'+category_name).css('display','none');

sessionStorage['t_cate_count']=parseInt(sessionStorage['t_cate_count'])-1;
$('#c').text(sessionStorage['t_cate_count']);
});



/*   logout   */

$('#logout').click(function(){
//alert('log out successfully');
if(sessionStorage['hash']){
sessionStorage['hash']='';
sessionStorage['mail']='';
sessionStorage['screen_name']='';
if(sessionStorage['status_code']==='second_login'){
sessionStorage['status_code']='logout_first';
}
window.location='index.html';
}else{

}
});

