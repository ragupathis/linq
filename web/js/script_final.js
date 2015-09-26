


function generate_category(){
var user_names;
	if(localStorage.mail){
	 user_names=localStorage.mail;
	}else{
		user_names='a';
	}
$.ajax({
        type: "POST",
		
		url: 'model/display_category.php',			   
		data: {'user':user_names}
   	}).done(function(result) {
	  result = result.substring(2, result.length - 1);
	  var t = JSON.parse(result);	
		 
	 localStorage.category_count=t['size'];
	 var htmlval='';
	for(id=1;id<=t['size'];id++){
	var category_name=t['cate'+id];
	var category_no=t['no'+id];
	var link_count=t['site_cnts'+id];
	var ls_temp=t[id];
	
    htmlval+='<div class="span1_of_1 " data-cate_no='+category_no+'>';
	htmlval+='<div class="span_of_1 top">';
	htmlval+='<h3 class="style category_name">'+category_name+'</h3>';
	htmlval+='<div class="link_count"><h6> Link Count '+link_count+'  </h6></div>';
    htmlval+='</div></div>';
	
	}
	$(".category_land").html(htmlval);
}); 

}





$(document).ready(function(){
	
	generate_category();

	
$(document.body).on('mousedown','.span1_of_1',function(){
	var id=$(this).data('cate_no');
	localStorage.cate_id=id;
});
});
