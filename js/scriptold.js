var i=0,j=0;
var k=0,k1=0;
function db_call(user_name){
var temp="";

 $.ajax({
        type: "POST",
		url: 'model/user_site.php',			
		data: {'by':user_name}
       
   	}).done(function(result) {
	
	  result = result.substring(2, result.length - 1);
        var t = JSON.parse(result);	
	console.log(t.count);
	
	for(var i=1;i<=t.count;i++){
	console.log(t[i]);
	 temp+='<li>'+t[i]+'</li>';
	}
	$('.all_site').html(temp);
	});  
}


function add_site(sitename){

$.ajax({
        type: "POST",
		url: 'model/add_site.php',			
		data: {'sitename':sitename}
       
   	}).done(function(result) {
	
	//$('.all_site').html(temp);
	}); 


}

$(document).ready(function(){
/*    template for new link design
var html3='	<section class="color-1"><div class="example">	<h2>demo</h2>	<nav class="cl-effect-20">';
html3+='	<a href="#" class="confirm"  id="video2" class="box" data-tooltip=""><span data-hover="guvi">guvi</span></a></nav></div></section>';
$('body').append(html3);
*/
var html1='<section>	<div class="example">	<h2 class="ab" title="my">audio</h2> 	<div class="confirm ab" class="box " id="audio" data-tooltip="" title="my1">';
		html1+='Click    	</div> 	</div>    </section>';

$('body').append(html1);

var html2='<section>	<div class="example">	<h2>demo</h2>  	<div class="confirm ab"  id="video" class="box " data-tooltip="" title="my2">';
					html2+='Click to delete   	</div> 	</div>   </section>';
$('body').append(html2);



var html= '<div class="demo">ragu<hr><div class="content">	<ul class="all_site">';
html+='</ul></div><hr>	<div class="new">+<input type="text" name="site" class="site" id="site" /><input type="button" value="ok"  id="s"'
html+=' class="ok"/><br></div>';


$('#video').attr('data-tooltip',html);
$('#audio').attr('data-tooltip',html);
window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
if(i==0){
  include('js/jquery.darktooltip1.js', function() {
	include('js/examples.js');
	//alert('in');
	i=1;
  })
  
}




/*

var html= '<div class="demo">ragu<hr><div class="content">	<ul class="all_site"><li>guvi.in   </li><li>guvi.in</li><li>guvi.in</li>';
html+='</ul></div><hr>	<div class="new">+<input type="text" name="site" class="site" id="site" /><input type="button" value="ok"  id="s"';
html+=' class="ok"/><br></div>';


$('#video').attr('data-tooltip',html);
$('#audio').attr('data-tooltip',html);

window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
if(i==0){
  include('js/jquery.darktooltip1.js', function() {
	include('js/examples.js');
//	alert('in');
	i=1;
  })
  
}
;*/


$('#video').mouseover(function(){


/*
window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
if(i==0){
  include('js/examples.js', function() {
	//include('js/examples.js');
	console.log('in');
	i=1;
  });
  }
  */
});

$('#video').click(function(){
//$('.all_site').html('<li>yaaaa</li>');
k++;
if((k%2)==1){
console.log("k="+(k%2));
db_call('admin');

	}
	
window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
if(i==0){
  include('js/examples.js', function() {
	//include('js/examples.js');
	console.log('in');
	i=1;
  });
  }
});




$('#audio').click(function(){
//$('.all_site').html('<li>yaaaa</li>');
k1++;
if((k1%2)==1){
console.log("k="+(k%2));
db_call('admin1');

	}
	
window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};
if(i==0){
  include('js/examples.js', function() {
	//include('js/examples.js');
	console.log('in');
	i=1;
  });
  }
});









});

$('#m').click(function(){
//alert('j');

});

$('#mm').click(function(){
alert('j');
});
$(document.body).on('mousedown','.ok',function(){
//alert('hi');
sitename=document.getElementById('site').value;
add_site(sitename);
$('.all_site').append("<li>"+sitename+"</li>");

});

$(document.body).on('click','#m',function(){
var catname='sports';
var html3='<section>	<div class="example">	<h2 class="ab" title='+catname+'>audio</h2> 	<div class="confirm ab" class="box" id='+catname+' ';
html3+='data-tooltip="" title='+catname+'>Click    	</div> 	</div>    </section>';

$('body').append(html3);

var html= '<div class="demo">ragu<hr><div class="content">	<ul class="all_site">';
html+='</ul></div><hr>	<div class="new">+<input type="text" name="site" class="site" id='+catname+'text /><input type="button" value="ok" class='+catname+'';
html+=' class="ok" title='+catname+' /><br></div>';



$('#sports').attr('data-tooltip',html);
window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};

  include('js/jquery.darktooltip1.js', function() {
	include('js/examples.js');
	
	i=1;
  })
  


});

$(document.body).on('mousedown','.sports',function(){
//$('.ab').click(function(){
alert(this.title);
alert(document.getElementById(this.title+'text').value);
console.log(this.title);
});

$(document.body).on('mousedown','#video1',function(){
//$('.ab').click(function(){
var html3='	<section class="color-1"><div class="example">	<h2>demo</h2>	<nav class="cl-effect-20">';
html3+='	<a href="#" class="confirm"  id="video2" class="box" data-tooltip=""><span data-hover="guvi">guvi</span></a></nav></div></section>';
$('body').append(html3);
//alert("success");

});