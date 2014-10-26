var flag_value=0,temp_flag=0,category_available=0,feedback_flag;


if(sessionStorage['hash']){
// for menu changes inn dynamic 
var menu_temp='<ul><li><a href="#0" id="ttt" class="cd-profile">Profile</a></li>';
menu_temp+='<li><a  href="#0" class="cd-signin" id="in">Sign in</a></li><li><a class="cd-signup" href="#0" id="out">Sign up</a></li>';
menu_temp+='<li><a  href="#0" id="logout" class="cd-signout">Sign Out</a></li></ul>';
$('.main-nav').html(menu_temp);
document.getElementById('in').innerHTML="add category";
document.getElementById('out').innerHTML="feedback";

var temp='<ul class="cd-switcher"><li><a href="#0">Add Category</a></li><li><a href="#0">Feedback</a></li>	</ul>';
temp+='<div id="cd-login"> <!-- add new category form -->	<p class="cd-form-message">Please enter your new category name</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace cd-email" for="reset-email">Category Name</label>';
temp+='<input class="full-width has-padding has-border" id="categoryname" type="text" placeholder="Category Name">';
temp+='<span class="category_errmsg">Category Already Found</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit"  id="newcategorybtn" value="Add">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';

temp+='<div id="cd-signup"> <!-- add new category form -->	<p class="cd-form-message">Please Give Your Valuable Feedback</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace cd-email" for="reset-email">Feedback</label>';
temp+='<input class="full-width has-padding has-border" id="search_category" type="text" placeholder="Please Give Your Valuable Feedback">';
temp+='<span class="feedbackerr">Please enter valid feedback here</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit" id="new_category" value="Send">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';
$('.cd-user-modal-container').html(temp);

 //menu_temp='<li><a class="cd-signu" href="#0" id="ttt">Profile</a></li></ul>';
//$('.main-nav').html(menu_temp);
}

function send_feedback(user_name,feedback){

  $.ajax({
        type: "POST",
		url: 'model/feedback.php',			
		data: {'user_id':user_name,'feedback':feedback}    
   	}).done(function(result) {
	    result = result.substring(1, result.length - 1);
        var t = JSON.parse(result);	
	if(t['status']==='true'){
	feedback_flag=1;
	$.bootbar.success("<p align='center'>Thanks for your feedback.</p>");
	}else
	{
	feedback_flag=0;
	
	}
	});  

}

function reset_password(resetemail){

 $.ajax({
        type: "POST",
		url: 'model/forget_password.php',			
		data: {'user_id':resetemail}    
   	}).done(function(result) {
	    result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	if(t['count']===1){
	
$('.forgeterr').css('display','block');
$('.forgeterr').html(t['pwd']);
	}else{
		
$('.forgeterr').css('display','block');
$('.forgeterr').html('your email id not registered');

	}
	});  

}
$('#ttt').click(function(event){

//alert('ok');
window.location="profile_menu.html";
event.preventDefault();
});



$('#reset_pwd').click(function(event){
var reset_email=document.getElementById('reset-email').value;
if(reset_email){
reset_password(reset_email);

$('.forgeterr').css('display','none');

}else{
$('.forgeterr').css('display','block');
$('.forgeterr').html('Please enter email id');
}
});

jQuery(document).ready(function($){

//$('.loader').css('display','none');
	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_forgot_password = $form_modal.find('#cd-reset-password'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
		$main_nav = $('.main-nav'),$main_nav1 = $('.cd-signin'),
		
		$form_modal1 = $('.cd-user-modal1'),
		
		$form_add_category=$form_modal1.find('#cd-add-category');

	//open modal
	$main_nav.on('click', function(event){

if(flag_value===0){
		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
			
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
			//show modal layer
			$form_modal.addClass('is-visible');	
			//show the selected form
			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
	
		}
}
	});
	
	$('#ttt').mouseover(function(){
flag_value=1;
});	
	$('#ttt').mouseout(function(){
flag_value=0;

});	
	
/*
$('.cd-add_category').click(function(){
alert('ok');
$form_modal1.addClass('is-visible');	
$('.cd-add_category').fadeIn(500);
});
	*/
	//close modal
	$('.cd-user-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	
	
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

	//switch from a tab to another
	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var $this= $(this),
			$password_field = $this.prev('input');
		
		( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
		( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
		//focus and move cursor to the end of input field
		$password_field.putCursorAtEnd();
	});

	//show forgot-password form 
	$forgot_password_link.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	$back_to_login_link.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$form_add_category.removeClass('is-selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$form_add_category.removeClass('is-selected');
		$tab_signup.addClass('selected');
	}

	function forgot_password_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_add_category.removeClass('is-selected');
		$form_forgot_password.addClass('is-selected');
	}
	
	function add_category_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$form_add_category.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	$form_login.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	$form_signup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});


	
	
	$('#new_category').click(function(){
	var feedback=document.getElementById('search_category').value;
	if(feedback){
	//alert(feedback);
	user_name=sessionStorage['mail'];
	send_feedback(user_name,feedback);
	$form_modal.removeClass('is-visible');
	//$.bootbar.success("<p align='center'>Thanks for your feedback.</p>");

	$('.feedbackerr').css('display','none');
//	$form_modal.removeClass('is-visible');
	//$('#search_category').attr('value')='';
	
	
	}
	else{
	//alert('sry');
	$('.feedbackerr').css('display','block');
	}
	});

$("#newcategorybtn").click(function(){
			add_new_category()
			if(temp_flag==1){
			$form_modal.removeClass('is-visible');
			}
			else{
			//document.getElementById('categoryname').placeholder="Please enter valid category";
			}
});

$('#categoryname').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		add_new_category()
			if(temp_flag==1){
			$form_modal.removeClass('is-visible');
			}
			else{
			//document.getElementById('categoryname').placeholder="Please enter valid category";
			}
	}
	});

if(sessionStorage['hash']){


//alert('login');


}else{

//alert('logout');
var panel='<div class="accordion span3 place-left margin10" data-role="accordion" data-closeany="false"> <div class="accordion-frame">';
    panel+='<a class="heading ribbed-blue fg-white" href="#">Save & Share Links</a> </div> <div class="accordion-frame">';
    panel+='<a class="heading ribbed-blue fg-white" href="#">Create your own categories</a> </div>	<div class="accordion-frame">';
panel+='<a class="heading ribbed-blue fg-white" href="#">Share your links </a> </div> <div class="accordion-frame">';
panel+='<a class="heading ribbed-blue fg-white" href="#">Free to use</a>  </div> <div class="accordion-frame">';
panel+='<a class="heading  ribbed-blue fg-white" href="#">Save private links</a>  </div> <div class="accordion-frame">';
panel+='<a class="heading ribbed-blue fg-white" href="#">like others link</a> </div> ';
panel+=' <div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="help.html">Help</a> </div> ';
panel+=' <div class="accordion-frame"><a class="heading ribbed-blue fg-white" href="team.html">About</a> </div> ';
$('.cornertext').html(panel);

$('.cornertextsmall').html(panel);
}
	
});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};



function add_new_category(){
temp_flag=0;
var category_name=document.getElementById('categoryname').value;
category_name=category_name.trim();
category_name=category_name.replace(" ","_");
			var len=category_name.length;		
			var pattern=new RegExp(' ');
			if(/^[a-zA-Z0-9-_]*$/.test(category_name)==false){
temp_flag=0;
$('.category_errmsg').html('Please remove invalid characters !');
 $('.category_errmsg').css('display','block');
			}
			else{	


for(inc=1;inc<=sessionStorage['category_count'];inc++){

//console.log(sessionStorage['category'+[inc]]);
if(category_name.toUpperCase()===sessionStorage['category'+[inc]].toUpperCase()){
category_available='true';

}else{
//category_available='fasle';

}
}

if(category_available==='true')
{
category_available=0;
//document.getElementById('categoryname').value='';
document.getElementById('categoryname').placeholder='This category already available ';

 $('.category_errmsg').html('category name already found');
 $('.category_errmsg').css('display','block');
}else{
//alert(category_available);			
	
			if((len>1) && (len<15)  ){
			category_available=0;
			//sessionStorage['category_count']=(sessionStorage['category_count'])++;
			//sessionStorage['category'+sessionStorage['category_count']]=category_name;
			var by=sessionStorage['mail'];
			add_category_db(category_name,by);
			$.bootbar.success("<p align='center'>add sites to new category.</p>");
			temp_flag=1;
				var html3='	<div class="ls_example" pid="'+category_name+'" >';
				html3+='<nav class="cl-effect-'+design_collection[random]+'"> <a href="#" class="confirm"  id="'+category_name+'" ';
				html3+='class="box" data-tooltip=""><span data-hover=" &nbsp; '+category_name+'">'+category_name+'</span></a></nav></div>';
				$('body').append(html3);

				 $('.errmsg').css('display','none');
				 document.getElementById('categoryname').value='';
			var html= '<div class="ls_demo">'+category_name+' <hr><div class="ls_content">	<ul class="'+category_name+'">';
	html+='</ul></div>';
	// code to generate add site feature to account holders  - start

	//if(user){
	html+='	<hr>  <div class="new"> <table><tr><td class="first_td"> <p class="vis">Add new site</p><input type="text" name="site" ';
	html+='class="ls_site input-xlarge search-query" id="'+category_name+'text"  placeholder="type your link " >';
	html+='<button btnid="'+category_name+'" id="as" class="btn btn-primary ok">Add</button> <input type="hidden" id="'+ category_name +'" class="temp"/> &nbsp;'; html+='</td><td><br> <i class="icon-eye-open" title="who can see ?"></i>';
	html+='<select id="'+category_name+'visible" title="who can see ?" class="input-small btn-default"> <option selected value="Public">Public</option>';
	html+='<option value="me">Only Me</option></select></td></tr>';
	html+='<div class="loader"> <span class="l-1"></span><span class="l-2"></span><span class="l-3"></span><span class="l-4"></span>';
  html+='<span class="l-5"></span><span class="l-6"></span></div></p></div></table><br><p class="'+category_name+'err errmsg alert alert-dismissable alert-messages1 " >';
	/*</table><br><p class="'+category_name+'err errmsg alert alert-dismissable alert-messages1 " >';
	html+='Please Login to add </p></div>';*/
				$("#"+category_name).attr('data-tooltip',html);
				//console.log(html);
				$("#"+category_name).attr('data-tooltip',html);

				//sessionStorage['category_notif']='first';
				
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
 
 $('.info').addClass('alert-info');
  }
  else{
 // alert('no');
 $('.category_errmsg').html('Please enter valid category name');
 $('.category_errmsg').css('display','block');
  }
  }
 
}
return true;
//}	
}


function add_category_db(user_name,new_category){
//console.log(user_name);
//console.log(new_category);

    $.ajax({
        type: "POST",
		url: 'model/add_category.php',			
		data: {'user_id':user_name,'category':new_category}    
   	}).done(function(result) {
	    result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	    
		//console.log(t['status']);
		if(t['status']==='true'){
		//console.log('true'); 
		sessionStorage['cate_cnt']=parseInt(sessionStorage['cate_cnt'])+1;
	  $('#cate_c').text(sessionStorage['cate_cnt']);
		}
		else{
		//console.log('false');
		}
		
		 
		
	});  

}

