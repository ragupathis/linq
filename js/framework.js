var ajaxcall={};

/*   wrapper function to pass the data	*/
ajaxcall.send_data=(function(json_value,url_id,callback)
{
var json_data= JSON.stringify(json_value);
var mapping=url_mapper(url_id);
/*	alert(mapping);	alert(json_data);	*/
  $.ajax({
        type: "POST",		
		data: {'myData':json_data},
        url: mapping
    }).done(function (result) {	
	
	callback(result);
	})

});

/*   fetching url from where to send the data  */

function url_mapper(id){

var model_path = {'login':"model/login_details.php",
"user":"model/user-details.php",
"contact":"model/contact_us.php",
"profile":"model/userprofile.php",
"wishlist_request":"model/wishlist_request.php",
"wishlist_db":"model/wishlist_db.php",
};

return model_path[id];
}


/*  to remove the url*/

function remove_url(){

}
