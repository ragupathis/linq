var flag_value=0;


if(sessionStorage['hash']){
// for menu changes inn dynamic 
var menu_temp='<ul><li><a class="cd-signu" href="#0" id="ttt">'+sessionStorage['screen_name']+'</a></li>';
menu_temp+='<li><a  href="#0" class="cd-signin" id="in">Sign in</a></li><li><a class="cd-signup" href="#0" id="out">Sign up</a></li>';
menu_temp+='<li><a  href="#0" id="logout">Sign Out</a></li></ul>';
//$('.main-nav').html(menu_temp);
//document.getElementById('in').innerHTML="add category";
//document.getElementById('out').innerHTML="feedback";

var temp='<ul class="cd-switcher"><li><a href="#0">Add Category</a></li><li><a href="#0">Feedback</a></li>	</ul>';
temp+='<div id="cd-login"> <!-- add new category form -->	<p class="cd-form-message">Please enter your new category name</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace cd-email" for="reset-email">Category Name</label>';
temp+='<input class="full-width has-padding has-border" id="categoryname" type="text" placeholder="Category Name">';
temp+='<span class="cd-error-message">Error message here!</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit"  id="newcategorybtn" value="Add">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';

temp+='<div id="cd-signup"> <!-- add new category form -->	<p class="cd-form-message">Please Give Your Valuable Feedback</p>';
temp+='	<form class="cd-form">	<p class="fieldset"><label class="image-replace cd-email" for="reset-email">Feedback</label>';
temp+='<input class="full-width has-padding has-border" id="reset-email" type="text" placeholder="Please Give Your Valuable Feedback">';
temp+='<span class="cd-error-message">Error message here!</span></p><p class="fieldset">';
temp+='<input class="full-width has-padding" type="submit" id="new_category" value="Send">	</p></form>';
temp+='	</div> <!-- cd-reset-password -->';
//$('.cd-user-modal-container').html(temp);

 //menu_temp='<li><a class="cd-signu" href="#0" id="ttt">Profile</a></li></ul>';
//$('.main-nav').html(menu_temp);
}

$('#ttt').click(function(event){

//alert('ok');
window.location="profile_new.html";
event.preventDefault();
});

jQuery(document).ready(function($){
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
	$($main_nav).click( function(event){

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
	
	$('.cd-user-modal').click( function(event){
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
	$($form_modal_tab).click( function(event) {
	
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
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


	
	
	$('#new_category').click(function(){
	alert('success');
	});

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