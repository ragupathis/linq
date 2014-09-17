

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
	  temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-remove-circle remove_sites" title="remove '+ t[i]+'" id='+t[i]+'></i></li>';
	}
	$('.added_site').append(temp);
	
	
	// code to display added categories
	 temp='';
	 for(var i=1;i<=t.cate_count;i++){
	  temp+='<li> <a href="https://'+t['cate'+i]+'" target="_blank">'+t['cate'+i]+'</a><i class="icon-remove-circle remove_category" title="remove '+ t['cate'+i]+'" id='+t['cate'+i]+'></i></li>';
	}
	$('.added_category').append(temp);
	
	// code to display liked sites 
	temp='';
	    for(var i=1;i<=t.like_count;i++){
	    //console.log(t[i]);
	    temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t['likes'+i]+'</a><i class="icon-thumbs-down" title="dislike this link" id='+t['likes'+i]+'></i></li>';
	}
	$('.liked_site').append(temp);
	
	$('#a').text(t.count);
	$('#b').text(t.cate_count);
	$('#c').text(t.like_count);
	});   
}


function remove_site(site_name,user,tblname){
$.ajax({
        type: "POST",
		url: 'model/delete_site.php',			
		data: {'sitename':site_name,'user':user,'tbl':tblname}
   	}).done(function(result) {	}); 
}

var i=0,j=0;
$(document).ready(function(){

if(sessionStorage['hash']){
//$('.username').html('<span class="icon-user"></span> &nbsp; '+ sessionStorage['mail']);
user_details(sessionStorage['mail']);
}else{
window.location='menu.html';
}
});

/*    dislike sites    */

$('.icon-thumbs-down').live('click', function(){
var site_name=this.id;
alert(site_name);
var user=sessionStorage['mail'];
var tblname="likedsites";
remove_site(site_name,user,tblname);
$('.err2').css('display','block'); 
});

/*   remove sites   */

$('.remove_sites').live('click', function(){
var site_name=this.id;
var user=sessionStorage['mail'];
var tblname="sitelist";
remove_site(site_name,user,tblname);
$('.err1').css('display','block');
});

/*   remove category   */

$('.remove_category').live('click', function(){
var category_name=this.id;

var user=sessionStorage['mail'];
var tblname="categories";
remove_site(category_name,user,tblname);
$('.err3').css('display','block');
});



/*   logout   */

$('#logout').click(function(){
sessionStorage['hash']='';
sessionStorage['mail']='';
window.location='menu.html';
});


