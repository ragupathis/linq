var flag_value=0,flag_value1=0,flag_value2=0,temp_flag=0,category_available=0,feedback_flag,cat_checked=0;

function getcategory(){


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
   //	 random=getRandomInt(0,6);
	 localStorage.category_count=t['size'];
	var option_temp='<option>Select Category</option>';
	for(id=1;id<=t['size'];id++){
	var category_name=t[id];
	localStorage.category+[id]=t[id];
	
//$('.drop').html('<option>'+category_name+'</option>');
   	option_temp+='<option>'+category_name+'</option>';

	}
$('.drop').html(option_temp);
$('.loader').css('display','none');
	
}); 




}

if(localStorage.hash){
// for menu changes inn dynamic 

var menu_temp='<ul><li><a href="#0" id="ttt" class="cd-profile">'+localStorage.screen_name+'<i class="icon-user-md"></i></a></li><li><a href="#0" id="sss" class="cd-profile">Sign Out<i class="icon-off"></i></a></li>';
//menu_temp+='<li><a  href="#0" class="cd-signin" id="in">Sign in</a></li><li><a class="cd-signup" href="#0" id="out">Sign up</a></li>';
//menu_temp+='<li><a  href="#0" id="logout" class="cd-signout">Sign Out<i class="icon-off"></i></a></li></ul>';
$('.main-nav').html(menu_temp);
/*document.getElementById('in').innerHTML="add category<i class='icon-plus'></i>";
document.getElementById('out').innerHTML="feedback<i class='icon-envelope'></i>";*/
/*
var temp='<ul class="cd-switcher"><li><a href="#0">Add Category</a></li><li><a href="#0">Feedback</a></li>	</ul>';
temp+='<div id="cd-login"> <!-- add new category form -->	<p class="cd-form-message">Please enter your new category name</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace " for="reset-email">Category Name</label>';
temp+='<input class="full-width has-padding has-border" id="categoryname" type="text" placeholder="Category Name">';
temp+='<span class="category_errmsg">category length 2-15 characters</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit"  id="newcategorybtn" value="Add">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';

temp+='<div id="cd-signup"> <!-- add new category form -->	<p class="cd-form-message">Please Give Your Valuable Feedback</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace " for="reset-email">Feedback</label>';
temp+='<input class="full-width has-padding has-border" id="search_category" type="text" placeholder="Please Give Your Valuable Feedback">';
temp+='<span class="feedbackerr">Please enter valid feedback here</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit" id="new_category" value="Send">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';*/
//var temp='';
//$('.cd-user-modal-container').html(temp);

 //menu_temp='<li><a class="cd-signu" href="#0" id="ttt">Profile</a></li></ul>';
//$('.main-nav').html(menu_temp);

$('#afterlogin').css('display','block');
$('#ppp').css('display','none');
$('#in').css('display','none');
$('#out').css('display','none');
getcategory();
}

function add_category_db(new_category,user_name){
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
		localStorage.cate_cnt=parseInt(localStorage.cate_cnt)+1;
	  $('.cate_c').text(localStorage.cate_cnt);
	  
		}
		else{
		//console.log('false');
		}
		
		 
		
	});  

}


function add_category(){

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
 $('.cat_err').css('color','red');
			}
			else{	


for(inc=1;inc<=localStorage.category_count;inc++){

//console.log(localStorage.category+[inc]);
if(category_name.toUpperCase()===localStorage.category+[inc].toUpperCase()){
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
 
 $('.category_errmsg').css('color','red');
}else{
//alert(category_available);			
	
			if((len>1) && (len<15)  ){
			category_available=0;
			//sessionStorage['category_count']=(sessionStorage['category_count'])++;
			//sessionStorage['category'+sessionStorage['category_count']]=category_name;
			var by=localStorage.mail;
			add_category_db(category_name,by);
			$.bootbar.success("<p align='center'>add sites to new category.</p>");
			temp_flag=1;
				
				
				 document.getElementById('categoryname').value='';
		

				//sessionStorage['category_notif']='first';
				

 $('.category_errmsg').css('color','#505260');
 $('.info').addClass('alert-info');
  }
  else{
 
 $('.category_errmsg').html('Enter category name between 2-15 characters');
 $('.category_errmsg').css('display','block');
 $('.category_errmsg').css('color','red');
  }
  }
 
}
return true;



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
$('.forgeterr').html('We sent password');
	}else{
		
$('.forgeterr').css('display','block');
$('.forgeterr').html('your email id not registered');

	}
	});  

}



$('#ttt').click(function(event){

//alert('ok');
window.location="profile.html";
event.preventDefault();
});
$('#sss').click(function(event){
localStorage.hash='';
//alert('ok');
location.reload();
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
$('#cat1').click(function(){
//alert('s');

$('#newcat_add').prop('disabled','true');
$('#addcat').prop('disabled','true');

$('.drop').removeAttr('disabled');
});


$('#cat2').click(function(){
//alert('sr');
$('.drop').prop('disabled','true');
$('#addcat').removeAttr('disabled');
$('#newcat_add').removeAttr('disabled');
//$('#newcat_add').prop('disabled','false');
//$('#addcat').prop('disabled','false');
});


jQuery(document).ready(function($){
$('#newcat_add').val('');
$('#link').val('');
if (document.getElementById('cat1').checked === true) {
$('#newcat_add').prop('disabled','true');
$('#addcat').prop('disabled','true');
$('.drop').removeAttr('disabled');
}else{

$('.drop').prop('disabled','true');
$('#addcat').removeAttr('disabled');
$('#newcat_add').removeAttr('disabled');
}


//alert(getVariable("url"));
var url=getVariable("url");
//if(se
localStorage.url=url;
var title=getVariable("title");
localStorage.title=title;
$('#link').val(localStorage.url);

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
	
	$('#sss').mouseover(function(){
flag_value=1;
});	
	$('#sss').mouseout(function(){
flag_value=0;

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


	
	



$('#inp').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		add_new_category();
			if(temp_flag==1){
			$form_modal.removeClass('is-visible');
			}
			else{
			//document.getElementById('categoryname').placeholder="Please enter valid category";
			}
	}
	});
	
	
	
$('#newcat_add').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();
add_new_category();
	
	}else{
	$('.cat_err').html('Enter category name between 2-15 characters');
	$('.cat_err').css('color','#505260');
	}
	
	});
	
	
$('#addcat').click(function(){
//alert('s');
add_new_category();
});

if(localStorage.hash){


//alert('login');

//$('#logout').css('display','none');

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

$('.cornertext').html(panel);

$('.cornertextsmall').html(panel);
}
	$('.loader').css('display','none');
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

function add_link_db(sitename,desc,categoryname,user_name,visible){

$.ajax({
        type: "POST",
		url: 'model/add_site_api.php',			
		data: {'sitename':sitename,'desc':desc,'category':categoryname,'user_name':user_name,'visible':visible}
   	}).done(function(result) {
	    result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	    
		//console.log(t['status']);
		if(t['status']==='true'){
		
		$('.ls_mine').css('display','none');
		$('.ls_mine1').css('display','none');
	  $('tr').html('Your site added successfully  , visit <a href="home.html"> linksavers.com </a>');
		}
		else{
		//console.log('false');
		}
		
		 
		
	}); 

}

function add_link(){

var sitename=localStorage.url;
//alert(link);
var categoryname=$('#newcat_add').val();

	var visible=$('#vis').val();
	if(visible==='OnlyMe'){
	visible=localStorage.mail;
	}
	var user_name=localStorage.mail;
	var desc=localStorage.title;
	
	if (document.getElementById('cat1').checked === true) {
      //  listtype = document.getElementById('cat1').value;
		categoryname=$('.drop').val();
		if(categoryname==='Select Category'){
		$('.cat_err1').html('please chosse the category');
		$('.cat_err1').css('color','red');
		$('.cat_err1').css('display','block');
		}else{
		add_link_db(sitename,desc,categoryname,user_name,visible);
		}
    } else {
		categoryname=$('#newcat_add').val();
     //   listtype = document.getElementById('cat2').value;
		if(cat_checked===1){
		if(categoryname===localStorage.verifed_cat){
		add_link_db(sitename,desc,categoryname,user_name,visible);
		}else{
		$('.cat_err1').html('please verify the category');
		$('.cat_err1').css('color','red');
		$('.cat_err1').css('display','block');
		}
		}else{
		
		$('.cat_err1').html('please verify the category');
		$('.cat_err1').css('color','red');
		$('.cat_err1').css('display','block');
		
		cat_checked=0;
		}
    }
	
	

}

	$('#link').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 add_link();
	}
	});

$('#addlink').click(function(){

add_link();

});

function add_new_category(){
temp_flag=0;
var category_name=document.getElementById('newcat_add').value;
//alert(category_name);
category_name=category_name.trim();
category_name=category_name.replace(" ","_");
			var len=category_name.length;		
			var pattern=new RegExp(' ');
			if(/^[a-zA-Z0-9-_]*$/.test(category_name)==false){
temp_flag=0;
$('.cat_err').html('Please remove invalid characters !');
 $('.cat_err').css('display','block');
 $('.cat_err').css('color','red');
			}
			else{	


for(inc=1;inc<=localStorage.category_count;inc++){

console.log(sessionStorage['category'+[inc]]);
if(category_name.toUpperCase()===localStorage.category+[inc].toUpperCase()){
category_available='true';

}else{
//category_available='fasle';

}
}

if(category_available==='true')
{
category_available=0;
//document.getElementById('newcat_add').value='';
document.getElementById('newcat_add').placeholder='This category already available ';

 $('.cat_err').html('category name already found');
 $('.cat_err').css('display','block');
 
 $('.cat_err').css('color','red');
}else{
//alert(category_available);			
	
			if((len>1) && (len<15)  ){
			category_available=0;
			var by=sessionStorage['mail'];
			add_category_db(category_name,by);
			localStorage.verifed_cat=category_name;
			cat_checked=1;
			
 $('.cat_err').html('your new category is verifed successfully !!!');
 $('.cat_err').css('display','block');
 $('.cat_err').css('color','blue');
			temp_flag=1;
			
				// $('.cat_err').css('display','none');
			//	 document.getElementById('newcat_add').value='';
		//	var temp_txt='<option>'+category_name+'</option>';
		//	$('.drop').html(temp_txt);

	
  }
  else{

 $('.cat_err').html('Enter category name between 2-15 characters');
 $('.cat_err').css('display','block');
 $('.cat_err').css('color','red');
  }
  }
 
}
return true;

}


function add_category_db(new_category,user_name){
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
		localStorage.cate_cnt=parseInt(localStorage.cate_cnt)+1;
	  $('#cate_c').text(localStorage.cate_cnt);
		}
		else{
		//console.log('false');
		}
		
		 
		
	});  

}

