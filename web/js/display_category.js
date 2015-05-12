var l="k";
function generate_category(){
	
var user_names;
if(localStorage.mail){
 user_names=localStorage.mail;
}else{    user_names='a'; }
$.ajax({
        type: "POST",
		
		url: 'model/display_category1.php',			   
		data: {'user':user_names}
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
    result = JSON.parse(result);	
	// localStorage.category_count=t['size'];
	//result=[{'category':'test'},{'category':'test1'}];
	result=result;
$('#templ').tmpl(result).appendTo('ul');


});

}