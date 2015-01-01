if(localStorage.hash){
// for menu changes inn dynamic 
	
				
var menu_temp='<ul><li><a class="cd-signin ls_uname ttt3"  id="ls_prof"></a></li><li><a href="#0" id="ttt" class="cd-profile">'+localStorage['screen_name']+'<i class="icon-user-md"></i></a></li>';

menu_temp+='<li><a href="#0" id="ttt1" class="cd-profile">Street<i class="icon-comment"></i></a></li>';
menu_temp+='<li><a href="#0" id="ttt2" class="cd-profile">Users<i class="icon-globe"></i></a></li>';


menu_temp+='<li><a  href="#0" class="cd-signin" id="in">Sign in</a></li><li><a class="cd-signup" href="#0" id="out">Sign up</a></li>';
menu_temp+='<li><a  href="#0" id="logout" class="cd-signout">Sign Out<i class="icon-off"></i></a></li></ul>';
$('.main-nav').html(menu_temp);
document.getElementById('in').innerHTML="add category<i class='icon-plus'></i>";
document.getElementById('out').innerHTML="feedback<i class='icon-envelope'></i>";

$('#ls_prof').html('Welcome '+localStorage.screen_name+'<i class="icon-star"></a>');

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
temp+='	</div> <!-- cd-reset-password -->';
$('.cd-user-modal-container').html(temp);

 //menu_temp='<li><a class="cd-signu" href="#0" id="ttt">Profile</a></li></ul>';
//$('.main-nav').html(menu_temp);
}