function usertype(q){


//var q="html";
 $.ajax({
        type: "POST",
		url: 'model/search.php',			
		data: {'q':q}
		
   	}).done(function(result) {
	
	  result = result.substring(1, result.length - 1);
     var t = JSON.parse(result);	
	  //console.log(t['response']);
	  //alert(t.srch_cnt);
	  if((t['srch_cnt'])>=1){
	//	  alert('s');
	var flag='';
	 for(var ls_rot=1;ls_rot<=t.srch_cnt;ls_rot++)
	 {
		 //flag+='<p>test</p>';
		 flag+='<p>'+t['srch_'+ls_rot]+' </p>';
	 }
	 console.log(flag);
	 $('#ls_sr').html(flag);
	 
	}else{
		//alert('no');
	}

	});  


}


$(document.body).on('click','#btnsearch',function(e){

var q=$( "#search" ).val();
//alert(q);
usertype(q);

});