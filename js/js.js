
function user_login(user_name){
    $.ajax({
        type: "POST",
		url: 'model/login_details.php',			
		data: {'user_id':user_name}    
   	}).done(function(result) {
	    result = result.substring(1, result.length - 1);
        var t = JSON.parse(result);	
	    //console.log(t['hash']);
	    sessionStorage['hash']=t['hash'];
	    sessionStorage['mail']=t['mail'];
		sessionStorage['status_code']='first_login';
	    window.location='main.html';
	});  
}

$( "#category_dialog" ).dialog({
	autoOpen: false,
	width: 500,
	buttons: [
		{
			text: "Add",
			click: function() {
			var category_name=document.getElementById('categoryname').value;
			var len=category_name.length;		
			var pattern=new RegExp(' ');
			if(pattern.test(category_name)){

			}
			else{	
			if((len>1) && (len<15)){
			$.bootbar.success("<p align='center'>add sites to new category.</p>");
				var html3='	<div class="example" pid="'+category_name+'">';
				html3+='<nav class="cl-effect-'+design_collection[random]+'"> <a href="#" class="confirm"  id="'+category_name+'" ';
				html3+='class="box" data-tooltip=""><span data-hover=" &nbsp; '+category_name+'">'+category_name+'</span></a></nav></div>';
				$('body').append(html3);

				
				var html= '<div class="demo">'+category_name+'<hr><div class="content">	<ul class="'+category_name+'">';
				html+='</ul></div><hr>	<div class="new"><table><tr><td class="first_td"> <p class="vis">Add new site</p> <input type="text" ';
				html+='name="site" class="site  input-xlarge search-query" id="'+category_name+'text" placeholder="www.guvi.in"/>';
				html+='<button value="Add" btnid="'+category_name+'" class="btn btn-primary ok">Add</button> </td><td><br><br> <i class="icon-eye-open" title="who can see ?"></i>  ';
				html+='<select id="'+category_name+'visible" class="input-small btn-default" title="who can see ?"> <option selected value="Public">';
				html+='Public</option><option value="me">Only Me</option></select> &nbsp; </td></tr></table>';
				html+='<p class="'+category_name+'err errmsg" >Please Login to add </p> </div>';
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
  $( this ).dialog( "close" );
  $('.info').css('color','blue');
  }
  else{
 //$('.msg').css('display','block');
 // $('.errmsg1').css('display','block');
 $('.info').css('color','red');
 //$.bootbar.danger("please give valid category name");
  }
}
//}	
			
			}
		},
		{
			text: "Cancel",
			click: function() {
					
			$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( ".dialog-link" ).click(function( event ) {
	$( "#category_dialog" ).dialog( "open" );
	event.preventDefault();
});


$( "#login_dialog" ).dialog({
	autoOpen: false,
	width: 500,
	buttons: [
		{
			text: "Login",
			click: function() {
			var user_name=document.getElementById('mailid').value;
	
	
   	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
   	
   	if (!testEmail.test(user_name)) {
		//user_login(user_name);
		$('.lgfailed').css('display','block');
	}else{
		user_login(user_name);
		$( this ).dialog( "close" );
	}
		}
		},
		{
			text: "Cancel",
			click: function() {
			$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( ".dialog-link-about" ).click(function( event ) {
	$( "#login_dialog" ).dialog( "open" );
	event.preventDefault();
});




