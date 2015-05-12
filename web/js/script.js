var user="",msg='',visible='';
var i=0,j=0;
var k=0,k1=0;
//var design_collection=[2,7,8,14,19,20]; 
var design_collection=[2]; 
var random=0;

 //(function ($){
		      var $tiles = $('#tiles'),
		          $handler = $('li', $tiles),
		          $main = $('#main'),
		          $window = $(window),
		          $document = $(document),
		          options = {
		            autoResize: true, // This will auto-update the layout when the browser window is resized.
		            container: $main, // Optional, used for some extra CSS styling
		            offset: 20, // Optional, the distance between grid items
		            itemWidth:280 // Optional, the width of a grid item
		          };
		      /**
		       * Reinitializes the wookmark handler after all images have loaded
		       */
		      function applyLayout() {
		        $tiles.imagesLoaded(function() {
		          // Destroy the old handler
		          if ($handler.wookmarkInstance) {
		            $handler.wookmarkInstance.clear();
		          }
		
		          // Create a new layout handler.
		          $handler = $('li', $tiles);
		          $handler.wookmark(options);
		        });
		      }
		      /**
		       * When scrolled all the way to the bottom, add more tiles
		       */
		      function onScroll() {
		        // Check if we're within 100 pixels of the bottom edge of the broser window.
		        var winHeight = window.innerHeight ? window.innerHeight : $window.height(), // iphone fix
		            closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);
		
		        if (closeToBottom) {
		          // Get the first then items from the grid, clone them, and add them to the bottom of the grid
		          var $items = $('li', $tiles),
		              $firstTen = $items.slice(0, 10);
		          $tiles.append($firstTen.clone());
		
		        //  applyLayout();
		        }
		      };
		
		      // Call the layout function for the first time
		      //applyLayout();
		
		      // Capture scroll event.
		      //$window.bind('scroll.wookmark', onScroll);
		    //})(jQuery);
		  
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
	
	localStorage.site_cnt=t['count'];
	localStorage.like_cnt=t['like_count'];
	localStorage.cate_cnt=t['cate_count'];
	localStorage.f1=t['f1'];
	localStorage.f2=t['f2'];
	
	   var text_val='<div class="accordion span3 place-left margin10" data-role="accordion" data-closeany="false">';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="profile.html">added link count <span class="site_c" cl>'+localStorage.site_cnt+'</span></a></div>	';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="profile.html">you liked link count <span class="like_c">'+localStorage.like_cnt+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="profile.html">you added category <span class="cate_c">'+localStorage.cate_cnt+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="profile.html">You Following <span class="cate_c">'+localStorage.f1+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="profile.html">Your Followers <span class="cate_c">'+localStorage.f2+'</span></div>';
text_val+='<div class="accordion-frame"><a class="heading ribbed-blue   fg-white" href="help.html">Help</div></div>';
 
	
	
	
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
	 temp+="<li><a href=''> <span class='mail-sender'>"+t['add'+i]+"</span> <span class='mail-subject'>share what you know</span> <span class='mail-sender'>	 <i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i></span></a> </li>";
	
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
	 
	 temp+="<li><a href=''> <span class='mail-sender'>"+t['like'+i]+"</span> <span class='mail-subject'>share what you know</span> <span class='mail-sender'>	 <i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i></span></a> </li>";
	
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
	
	 temp+="<li><a href=''> <span class='mail-sender'>"+t[i]+"</span> <span class='mail-subject'>share what you know</span> <span class='mail-sender'>	 <i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i><i class='icon-thumbs-up' ></i></span></a> </li>";
	
	
	}
	
	
	
	
	
  $('.loader').css('display','none');
	
	$('.site_list').html(temp);
	//$('.'+categorynames).html(temp);
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
		localStorage.hash=t['hash'];
		localStorage.mail=t['mail'];
		localStorage.screen_name=t['screen_name'];
		localStorage.status_code='first_login';
		window.location='home.html';
	}
	 if((t['response'])==='olduser'){
	 $('.already').css('display','block');
	//console.log( "old user");
	}
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
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min )) + min;
    }
function generate_category(){
var user_names;
if(localStorage.mail){
 user_names=localStorage.mail;
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
	 localStorage.category_count=t['size'];
	 var htmlval='';
	for(id=1;id<=t['size'];id++){
	var category_name=t[id];
	var ls_temp=t[id];
	localStorage['category'+[id]]=t[id];
	/*
	var html3='	<div class="ls_example" pid="'+category_name+'" >';
	html3+='	<nav class="cl-effect-'+design_collection[0]+'"> <a href="#" class="confirm"  id="'+category_name+'" class="box" data-tooltip="">';
	html3+='<span class="cat_names" data-hover=" &nbsp; '+category_name+'" >'+category_name+'<i class="ls_cnt_no">('+t['site_cnts'+id]+')</i></span></a></nav></div>';
	$('.ls_mine').append(html3);
*/
	//var html= '<div class=" ls_demo lss_'+category_name+'" >'+category_name +'<i class="icon-remove scnt"></i> <hr><div class="ls_content ">	<ul class="'+category_name+'">';
	//html+='</ul></div>';
	// code to generate add site feature to account holders  - start

	/*
	html+='	<hr>  <div class="new"> <table><tr><td class="first_td"> <p class="vis">Add new site</p><input type="text" name="site" ';
	html+='class="ls_site input-xlarge search-query" id="'+category_name+'text"  placeholder="type your link " >';
	html+='<button btnid="'+category_name+'" id="as" class="btn btn-primary ok">Add</button> <input type="hidden" id="'+ category_name +'" class="temp"/> &nbsp;'; html+='</td><td><br> <i class="icon-eye-open ls_tooltip" title="who can see ?"></i>';
	html+='<select id="'+category_name+'visible" title="who can see ?" class="input-small btn-default ls_tooltip"> <option selected value="Public">Public</option>';
	html+='<option value="me">Only Me</option></select></td></tr>';
	html+='<div class="loader1"> <span class="l-1"></span><span class="l-2"></span><span class="l-3"></span><span class="l-4"></span>';
  html+='<span class="l-5"></span><span class="l-6"></span></div></p></div></table><br><p class="'+category_name+'err errmsg alert alert-dismissable alert-messages1 " >';
  */			     
     htmlval+='<li><img src="images/img1.jpg" width="282" height="118">';
	htmlval+='<div class="post-info"><div class="post-basic-info"><h3><a href="#">'+category_name+'</a></h3><span><a href="#"><label> </label>Movies</a></span>';
	htmlval+='<p>Sites : 100 , Followers : 200 .</p></div><div class="post-info-rate-share">';
    htmlval+='<div class="rateit">	<span> </span></div><div class="post-share"><span> </span></div><div class="clear"> </div></div></div> </li>';
	
	
	
	// code to generate add site feature to account holders - end 
	//$("#"+category_name).attr('data-tooltip',html);
	}
	/*htmlval='<li><img src="images/img1.jpg" width="282" height="118"><div class="post-info"><div class="post-basic-info"><h3><a href="#">l</a></h3><span><a href="#"><label> </label>Movies</a></span><p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p></div><div class="post-info-rate-share"><div class="rateit">	<span> </span></div><div class="post-share"><span> </span></div><div class="clear"> </div></div></div> </li>';
	htmlval+='<li><img src="images/img1.jpg" width="282" height="118"><div class="post-info"><div class="post-basic-info"><h3><a href="#"></a></h3><span><a href="#"><label> </label>Movies</a></span><p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p></div><div class="post-info-rate-share"><div class="rateit">	<span> </span></div><div class="post-share"><span> </span></div><div class="clear"> </div></div></div> </li>';*/
	//console.log(htmlval);
	$(".my_tiles").html(htmlval);
	
	
	
  
//}
$('.loader').css('display','none');
	// uncomment to show back to top button
	//$('body').append('<a href="#0" class="cd-top">Top</a>');
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
	
	generate_category();
fetch_site('Health','priya@priya.com');
applyLayout();


if(localStorage.hash){


if(localStorage.status_code==='first_login'){
//$.bootbar.success("<p align='center'>Welcome "+localStorage.screen_name+"</p>");
localStorage.status_code='second_login';
} 

//display_link_count(localStorage.mail);


}else{

var temp_val='<p><label>User Name</label><input type="text" id="mailid" placeholder="mail id"/></p><p><label>Password</label><input type="password" id="pass" /></p>';
temp_val+='<p><button id="signin">SignIn</button></p>';

$('#add_category').css('display','none');
$('#profile').css('display','none');
if(localStorage.status_code==='logout_first'){
//$.bootbar.danger("<p align='center'>"+ localStorage.screen_name+" you are logged out successfully</p>");
localStorage.status_code='';
}else{
//$.bootbar.success("<p align='center'>Welcome to Linksavers , Click the Category to view the Links</p>");
}
}

//generate_category();

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

/*   fetch sites when click category 	*/

$(document.body).on('mousedown','.ls_example',function(){
$('.loader1').css('display','block');
var userid='';
var category_temp =  $(this).attr( "pid" );
if(localStorage.mail){
userid=localStorage.mail;}
else{  userid='';  }
var load_temp='<img class="loader_img" src="img/loading-bars.svg">';
$('.'+category_temp).html(load_temp);
fetch_site(category_temp,userid);
});

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

$(document.body).on('mousedown','#profile',function(){
if(localStorage.hash){
window.location='profile_new.html';
}
});
$(document.body).on('mousedown','.username',function(){
if(localStorage.hash){
window.location='profile_new.html';
}
});

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

$(document.body).on('mousedown','.dark-tooltip',function(){

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

/*

$(document.body).on('mouseover','.ls_label',function(){
$('.ls_box').css('display','block');
$('.ls_box').html('');
$('.ls_box').html('Please wait');
//alert('wow');
//$('.dark-tooltip').css('display','none');
var temp_url=$(this).attr('href');
//alert(temp_url);
$('.ls_box').html('<iframe src='+temp_url+' height="500px" width="500px"></iframe>');
//alert('ok');
});



$(document.body).on('mouseout','.ls_label',function(){
//$('.ls_box').css('display','none');
//$('.ls_box').html('');
//alert('wow');
//$('.dark-tooltip').css('display','none');
//var temp_url=$(this).attr('href');
//alert(temp_url);
//$('.ls_box').html('<iframe src='+temp_url+' height="500px" width="500px"></iframe>');
//alert('ok');
});


*/
$(document.body).on('mousedown','.icon-search',function(){
//alert(123);
var ls_no=$(this).attr('data');
$('.ls_box').css('display','none');
$('.in_'+ls_no).html('<img src="img/loading-bars.svg" class="ls_url_loader" alt="Loading...,Please Wait">');
$('.'+ls_no).css('display','block');

var ls_temp_url=$(this).data('url');

$('.in_'+ls_no).html('<iframe src=http://'+ls_temp_url+' height="500px" width="500px"></iframe>');
});

$(document.body).on('mousedown','.rmv_pre',function(){
//alert(123);

$('.ls_box').css('display','none');
});