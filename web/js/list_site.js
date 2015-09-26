
function fetch_site(categorynames,userid){
var temp="";

 $.ajax({
        type: "POST",
		url: 'model/user_site.php',			
		data: {'category':categorynames,'user':userid}
       
   	}).done(function(result) {
		window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
//if(i==0){
  include('js/tooltip_main.js', function() {
	
  });
	
	  result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	//console.log(t.count);
	//$('.count_'+categorynames).html(t.count);
	localStorage.site_size=t.count;
	var ls_box_cnt=0;
	//$('.count_'+categorynames).html(sessionStorage['site_size']);
	for(var i=1;i<=t.add_count;i++){
	//console.log(t[i]);
	//t[i]=t[i].replace('\\','');
	ls_box_cnt=parseInt(ls_box_cnt)+1;
	/*    to display added sites    */
	localStorage['add_count']=t.add_count;
	t['add'+i]=t['add'+i].replace(/\\/g,'');
	
	var title_temp=t['desc'+i].replace(/ /g,'_');
	if(title_temp===''){
	title_temp=t['add'+i].toLowerCase();
	}
	 /*temp+='<li class="'+categorynames+'ls'+ls_box_cnt+'"> <a class="ls_label label ls_tooltip" title='+title_temp+' href="http://'+t['add'+i]+'" target="_blank">'+t['add'+i]+'</a><div class="ls_box ls_box'+i+'"><i class="icon-remove rmv_pre"></i><div class="in_ls_box'+i+'"></div></div><i class="icon-search ls_tooltip" title="view the site" data="ls_box'+ls_box_cnt+'" data-url="'+t['add'+i]+'"></i><i class="icon-remove-circle ls_tooltip" uid='+categorynames+' id='+t['add'+i]+' ls_id="'+categorynames+'ls'+i+'" title="remove '+t['add'+i]+'"></i><i class="icon-gift ls_up ls_tooltip" uid='+categorynames+' id='+t['add'+i]+' title="just for test, give any suitable idea to this place "></i><a target=_blank" href="whatsapp://send?text='+t['add'+i]+' from www.linksavers.com"><i class="icon-phone ls_tooltip" title="Share it on WhatsApp"></i></a><a target=_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['add'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i> </a> <a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['add'+i]+'"><i  class="icon-twitter ls_tooltip" title="share it on twitter"></i> </a></li>';
	 */
	temp+="<li><div> <span class='site-link'>link: <a target='_blank' href='http://"+t['add'+i]+"'> "+t['add'+i]+"</a></span> <span class='site-desc'>description: "+title_temp+"</span> <span class='activities'>	 <i class='icon-remove-circle' ></i> <i class='icon-thumbs-down ls_down' ></i> <a target=_blank' href='whatsapp://send?text="+t['add'+i]+" from www.linksavers.com'><i class='icon-phone' ></i> </a><a target='_blank' href='http://www.facebook.com/sharer.php?u=http://"+t['add'+i]+"'><i class='icon-facebook' ></i></a> <a target='_blank' href='http://twitter.com/home?status=Linksavers%20http://"+t['add'+i]+"'><i class='icon-twitter' ></i></a></span></div> </li>";
	
	
	
	}
	
	  
	
	/*  to display am liked sites   */
		for(var i=1;i<=t.like_count;i++){
	//console.log(t[i]);
	//t[i]=t[i].replace('\\','');
	ls_box_cnt=parseInt(ls_box_cnt)+1;
	t['like'+i]=t['like'+i].replace(/\\/g,'');
	
	var title_temp=t['like_desc'+i].replace(/ /g,'_');
	if(title_temp===''){
	title_temp=t['like'+i].toLowerCase();
	}
	/* temp+='<li class="'+categorynames+'ls'+ls_box_cnt+'"> <a class="ls_label label ls_tooltip" title='+title_temp+' href="http://'+t['like'+i]+'" target="_blank">'+t['like'+i]+'</a><div class="ls_box ls_box'+ls_box_cnt+'" ><i class="icon-remove rmv_pre"></i><div class="in_ls_box'+i+'"></div></div><i class="icon-search ls_tooltip" title="view the site"  data="ls_box'+ls_box_cnt+'" data-url="'+t['like'+i]+'"></i><i class="icon-ban-circle ls_tooltip" uid='+categorynames+' id='+t['like'+i]+' title="report '+t['like'+i]+'"></i><i class="icon-thumbs-down ls_down ls_tooltip" uid='+categorynames+' id='+t['like'+i]+' title="unlike '+t['like'+i]+'"></i><a target=_blank" href="whatsapp://send?text='+t['like'+i]+' from www.linksavers.com"><i class="icon-phone ls_tooltip" title="Share it on WhatsApp"></i></a><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t['like'+i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i> </a> <a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t['like'+i]+'"><i  class="icon-twitter ls_tooltip" title="share it on twitter"></i> </a></li>';*/
	 
	/*
	 temp+="<li><div> <span class='site-link'>"+t['like'+i]+"</span> <span class='site-desc'>share what you know</span> <span class='activities'>	 <i class='icon-thumbs-up' ></i> <i class='icon-thumbs-up' ></i> <i class='icon-thumbs-up' ></i> <i class='icon-thumbs-up' ></i> <i class='icon-thumbs-up' ></i></span></div> </li>";*/
	 /*
	 temp+="<li><div> <span class='site-link'>link: "+t['like'+i]+"</span> <span class='site-desc'>description: "+title_temp+"</span> <span class='activities'>	 <i class='icon-ban-circle' ></i> <i class='icon-thumbs-down' ></i> <i class='icon-phone' ></i> <i class='icon-facebook' ></i> <i class='icon-twitter' ></i></span></div> </li>";*/
	 
	 	temp+="<li><div> <span class='site-link'>link: <a target='_blank' href='http://"+t['like'+i]+"'> "+t['like'+i]+"</a></span> <span class='site-desc'>description: "+title_temp+"</span> <span class='activities'>	 <i class='icon-ban-circle' ></i> <i class='icon-thumbs-down ls_down' ></i> <a target=_blank' href='whatsapp://send?text="+t['like'+i]+" from www.linksavers.com'><i class='icon-phone' ></i> </a><a target='_blank' href='http://www.facebook.com/sharer.php?u=http://"+t['like'+i]+"'><i class='icon-facebook' ></i></a> <a target='_blank' href='http://twitter.com/home?status=Linksavers%20http://"+t['like'+i]+"'><i class='icon-twitter' ></i></a></span></div> </li>";
	 
	}
	
	/*   to display other added sites  */
		for(var i=1;i<=t.other_count;i++){
	//console.log(t[i]);
	//t[i]=t[i].replace('\\','');
	ls_box_cnt=parseInt(ls_box_cnt)+1;
	t[i]=t['other'+i].replace(/\\/g,'');
	
	var title_temp=t['other_desc'+i].replace(/ /g,'_');
	if(title_temp===''){
	title_temp=t['other'+i].toLowerCase();
	}
	 /*temp+='<li class="'+categorynames+'ls'+ls_box_cnt+'"> <a class="ls_label label ls_tooltip" title='+title_temp+' href="http://'+t[i]+'" target="_blank">'+t[i]+'</a><div class="ls_box  ls_box'+ls_box_cnt+'"><i class="icon-remove rmv_pre"></i><div class="in_ls_box'+i+'"></div></div><i class="icon-search ls_tooltip" title="view the site"   data="ls_box'+ls_box_cnt+'" data-url="'+t[i]+'"></i><i class="icon-ban-circle ls_tooltip" uid='+categorynames+' id='+t[i]+' title="report '+t[i]+'"></i><i class="icon-thumbs-up ls_up ls_tooltip" uid='+categorynames+' id='+t[i]+' site_desc="'+title_temp+'" title="like '+t[i]+'"></i><a target=_blank" href="whatsapp://send?text='+t[i]+' from www.linksavers.com"><i class="icon-phone ls_tooltip" title="Share it on WhatsApp"></i></a><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+t[i]+'"><i class="icon-facebook ls_tooltip" title="share it on facebook"></i> </a> <a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+t[i]+'"><i  class="icon-twitter ls_tooltip" title="share it on twitter"></i> </a></li>';*/

	temp+="<li><div> <span class='site-link'>link: <a target='_blank' href='http://"+t[i]+"'> "+t[i]+"</a></span> <span class='site-desc'>description: "+title_temp+"</span> <span class='activities'>	 <i class='icon-ban-circle' ></i> <i class='icon-thumbs-up ls_up' ></i> <a target=_blank' href='whatsapp://send?text="+t[i]+" from www.linksavers.com'><i class='icon-phone' ></i> </a><a target='_blank' href='http://www.facebook.com/sharer.php?u=http://"+t[i]+"'><i class='icon-facebook' ></i></a> <a target='_blank' href='http://twitter.com/home?status=Linksavers%20http://"+t[i]+"'><i class='icon-twitter' ></i></a></span></div> </li>";
	}
	
	
	
	
	
  $('.loader').css('display','none');
	
	$('.site_list').html(temp);
	//$('.'+categorynames).html(temp);
	});  
}




function add_notif(by,byname,msg,visibility){
var temp="";
 $.ajax({
        type: "POST",
		url: 'model/notification.php',			
		data: {'by':by,'byname':byname,'msg':msg,'visible':visibility}
		
   	}).done(function(result) {
	
	
	
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
	 
	 localStorage['add_count']=parseInt(localStorage['add_count'])+1;
var temp_i=localStorage['add_count'];
	 
//	  $('.loader').css('display','none');
	  if(t['status']==='true'){
	localStorage.site_size=parseInt(localStorage.site_size)+1;
	$('.count_'+categoryname).html(localStorage.site_size);
	
		localStorage['site_cnt']=parseInt(localStorage.site_cnt)+1;
$('#site_c').text(localStorage.site_cnt);


 $('.'+categoryname+'err').addClass('alert-info'); 
$('.'+categoryname).append('<li class="'+categoryname+'ls'+temp_i+'"> <a class="ls_label label" href="http://'+sitename+'" target="_blank">'+sitename+'</a> <i class="icon-ban-circle" id="'+sitename+'" uid='+categoryname+' ls_id="'+categoryname+'ls'+temp_i+'" title="remove '+sitename+'"></i> <i class="icon-gift" id="'+sitename+'" uid='+categoryname+' title="like '+sitename+'"></i><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+sitename+'"><i class="icon-facebook" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+sitename+'"> <i class="icon-twitter" title="share it on twitter"></i></a></li>');
$('.'+categoryname+'err').html('your link added successfully');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
document.getElementById(categoryname+'text').value='';

var uname=localStorage.screen_name;
msg=uname+' adds  '+sitename;
visible='true';
add_notif(user_name,uname,msg,visible);

}else{
$('.'+categoryname+'err').html('Error !!! Sorry try again');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
}
	}
	catch(err){
//	$('.loader').css('display','none');
		localStorage.site_size=parseInt(localStorage.site_size)+1;
	$('.count_'+categoryname).html(localStorage.site_size);
	
		localStorage.site_cnt=parseInt(localStorage.site_cnt)+1;
$('.site_c').text(localStorage.site_cnt);



 $('.'+categoryname+'err').addClass('alert-info'); 
$('.'+categoryname).append('<li class="'+categoryname+'ls'+temp_i+'"> <a class="ls_label" href="http://'+sitename+'" target="_blank">'+sitename+'</a> <i class="icon-remove-circle" id="'+sitename+'" uid='+categoryname+' ls_id="'+categoryname+'ls'+temp_i+'" title="remove '+sitename+'"></i> <i class="icon-gift" id="'+sitename+'" uid='+categoryname+' title="Testing..."></i><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://'+sitename+'"><i class="icon-facebook" title="share it on facebook"></i></a><a target="_blank" href="http://twitter.com/home?status=Linksavers%20http://'+sitename+'"> <i class="icon-twitter" title="share it on twitter"></i></a></li>');
$('.'+categoryname+'err').html('link added successfully');
$('.'+categoryname+'err').css('display','block');
$('.loader').css('display','none');
document.getElementById(categoryname+'text').value='';

var uname=localStorage.screen_name;
msg=uname+'  adds '+sitename;
visible='true';
add_notif(user_name,uname,msg,visible);

	}
	}); 
	
}


function liked_site(category_temp,site_name,user,desc){
$.ajax({
        type: "POST",
		url: 'model/liked_site.php',			
		data: {'sitename':site_name,'desc':desc,'user':user,'category':category_temp}
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  $('.loader').css('display','none');
	   $('.'+category_temp+'err').removeClass('alert-info');
	    $('.'+category_temp+'err').removeClass('alert-danger');
	  if(t['replay']==='you liked'){
	  localStorage.like_cnt=parseInt(localStorage.like_cnt)+1;
	 $('.like_c').html(localStorage.like_cnt);
     
	  $('.'+category_temp+'err').addClass('alert-info'); 

	var uname=localStorage.screen_name;
	msg=uname+'  likes '+site_name;
	visible='true';
	add_notif(user,uname,msg,visible);

	  }
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

function removesite(id_this,cate_this,byuser){
var dummy_flag='sitelist';	

$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':id_this,'user':byuser,'cate':cate_this,'tbl':dummy_flag}
   	}).done(function(result) {
	/*
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
	*/
	}); 
	
}

function disliked_site(category_temp,site_name,user){
var tblname="likedsites";	
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'cate':category_temp,'user':user,'tbl':tblname}
   	}).done(function(result) {	
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);
	  $('.loader').css('display','none');
	  $('.'+category_temp+'err').removeClass('alert-info');
	  $('.'+category_temp+'err').removeClass('alert-danger');
	  if(t['replay']==='you disliked'){
	  localStorage.like_cnt=parseInt(localStorage.like_cnt)-1;
      $('.like_c').html(localStorage.like_cnt);
	  $('.'+category_temp+'err').addClass('alert-info'); 
	  }
	  else{
	  $('.'+category_temp+'err').addClass('alert-danger');
	  }
	$('.'+category_temp+'err').html(t['replay']);
	$('.'+category_temp+'err').css('display','block');
	}); 
}

$(document).ready(function(){
	
	
fetch_site('Health','priya@priya.com');



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
sitename=sitename.trim();
sitename=sitename.replace(/ /g,'');
sitename=sitename.replace(/https:\/\//g,'');
sitename=sitename.replace(/http:\/\//g,'');
sitename=sitename.replace(/www./g,'');
//alert(sitename);
sitename='www.'+sitename;
//t[i]=t[i].replace(/\\/g,'');

//alert(sitename);
//sitename=sitename.substring(sitename.indexOf("www."));

if(sitename.length>5){
var visible=document.getElementById(categoryname+'visible').value;
if(visible=='me'){
visible=localStorage.mail;}

 
if(localStorage.hash)
{
var user=localStorage.mail;
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


/*   like sites 	*/

$(document.body).on('mousedown','.icon-thumbs-up',function(){
var cat_name=$(this).attr( "uid" );


//alert('am in like mode');
if(localStorage.mail){
	$(this).removeClass('icon-thumbs-up');
$(this).addClass('icon-thumbs-down');

$(this).removeClass('ls_up');
$(this).addClass('ls_down');
//alert(site_name);
var site_name=$(this).attr( "id" );
var user=localStorage.mail;
var category_temp =  $(this).attr( "uid" );
$('.'+category_temp+'err').html('Please wait !!!');
$('.'+category_temp+'err').css('display','block');
$('.loader1').css('display','block');
var desc=$(this).attr( "site_desc" );
//alert(desc);
//alert(desc);
liked_site(category_temp,site_name,user,desc);

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
if(localStorage.mail){
var site_name=$(this).attr( "id" );
//alert(site_name);
var user=localStorage.mail;
$('.'+cat_name+'err').html('Please wait !!!');
$('.'+cat_name+'err').css('display','block');
$('.loader1').css('display','block');
report_site(cat_name,site_name,user);

}
else{
$('.'+cat_name+'err').addClass('alert-danger');
$('.'+cat_name+'err').html('please login to report ');
$('.'+cat_name+'err').css('display','block');
}
});

/*  navigate to profile page  */



/*  delete site   */


$(document.body).on('mousedown','.icon-remove-circle',function(){
var hide_this=$(this).attr( "ls_id" );
$('.'+hide_this).css('display','none');
var cate_this=$(this).attr( "uid" );
var id_this=$(this).attr( "id" );
var byuser=localStorage['mail'];
removesite(id_this,cate_this,byuser);
});

/*    unlike site    */

$(document.body).on('mousedown','.ls_down ',function(){
	$(this).removeClass('icon-thumbs-down');
$(this).addClass('icon-thumbs-up');

	$(this).removeClass('ls_down');
$(this).addClass('ls_up');
	//alert('am in dislike mode');
	
	
if(localStorage.mail){
//alert(site_name);
var site_name=$(this).attr( "id" );
var user=localStorage.mail;
var category_temp =  $(this).attr( "uid" );
$('.'+category_temp+'err').html('Please wait !!!');
$('.'+category_temp+'err').css('display','block');
$('.loader1').css('display','block');
//var desc='desc';//$(this).attr('title');
//alert(desc);
disliked_site(category_temp,site_name,user);

}
else{
$('.'+cat_name+'err').addClass('alert-danger');
$('.'+cat_name+'err').html('please login to dislike ');
$('.'+cat_name+'err').css('display','block');
}
});

/*   logout   */ 

$(document.body).on('mousedown','#logout',function(){
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

function signup_details(){
var newmail=document.getElementById('newmail').value;
var password=document.getElementById('newpass1').value;
signup_data(newmail,password);
}

$("#signup_btn").click(function(){

signup_details();
});

/*
$(document.body).on('mousedown','.icon-facebook',function(){

var url=$(this).attr( "url" );
alert(url);

});
*/


/*		// code to show preview  of  link
$(document.body).on('mousedown','.icon-search',function(){
var ls_no=$(this).attr('data');
$('.ls_box').css('display','none');
$('.in_'+ls_no).html('<img src="img/loading-bars.svg" class="ls_url_loader" alt="Loading...,Please Wait">');
$('.'+ls_no).css('display','block');

var ls_temp_url=$(this).data('url');

$('.in_'+ls_no).html('<iframe src=http://'+ls_temp_url+' height="500px" width="500px"></iframe>');
});

$(document.body).on('mousedown','.rmv_pre',function(){
$('.ls_box').css('display','none');
});*/