
function user_details(user_name)
{    var temp='';
     $.ajax({
        type: "POST",
		url: 'model/profile.php',			
		data: {'by':user_name}
       
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
      var t = JSON.parse(result);	
	  for(var i=1;i<=t.count;i++){
	  temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-remove-circle" title="remove '+ t[i]+'" id='+t[i]+'></i></li>';
	}
	$('.added_site').append(temp);
	});   
}

function liked_sitelist(user_name)
{   var temp='';
    $.ajax({
        type: "POST",
		url: 'model/liked_sitelist.php',			
		data: {'by':user_name}   
   	}).done(function(result) {
	    result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	    //console.log(t.count);
	    for(var i=1;i<=t.count;i++){
	    //console.log(t[i]);
	    temp+='<li> <a href="https://'+t[i]+'" target="_blank">'+t[i]+'</a><i class="icon-thumbs-down" title="dislike this link" id='+t[i]+'></i></li>';
	}
	$('.liked_site').append(temp);
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
$('.username').html('<span class="icon-user"></span> &nbsp; '+ sessionStorage['mail']);
user_details(sessionStorage['mail']);
liked_sitelist(sessionStorage['mail']);
}else{
window.location='main.html';
}
});

/*    dislike sites    */

$('.icon-thumbs-down').live('click', function(){
var site_name=this.id;
var user=sessionStorage['mail'];
var tblname="likedsites";
remove_site(site_name,user,tblname);
$('.err2').css('display','block');
});

/*   remove sites   */

$('.icon-remove-circle').live('click', function(){
var site_name=this.id;
var user=sessionStorage['mail'];
var tblname="sitelist";
remove_site(site_name,user,tblname);
$('.err1').css('display','block');
});

/*   logout   */

$('#logout').click(function(){
sessionStorage['hash']='';
sessionStorage['mail']='';
window.location='main.html';
});


