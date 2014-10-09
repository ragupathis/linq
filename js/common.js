jQuery("document").ready(function($){
var _pageWidth = $("body").outerWidth();
var _timing = _pageWidth + 3500;
  $(".loader span").each(function (i) {
    // store the item around for use in the 'timeout' function
    var _item = $(this); 
    // execute this function sometime later:
    setTimeout(function($) { 
      _item.removeClass("jmp");
      _item.css({"left": '110%'});
      /* console.log("loop"); */
    }, 180*i); //move each dot one after the other, transition handled by CSS
    setTimeout(function($) { 
      _item.addClass("jmp");
      _item.css({"left": '-10%'});
      /* console.log("de-loop"); */
    }, 3000 + 180*i); //move each dot one back to start in order, transition removed via <.jmp> class
}); //RUN ONCE OUT OF LOOP, AVOID DELAY
   
$("window").resize(function(){
var _pageWidth = $("body").outerWidth();
var _timing = _pageWidth + 3500;
});
   
   
var _pageLoader = setInterval(function(){
$(".loader span").each(function (i) {
    // store the item around for use in the 'timeout' function
    var _item = $(this); 
    // execute this function sometime later:
    setTimeout(function($) { 
      _item.removeClass("jmp");
      _item.css({"left": '110%'});
      /* console.log("loop"); */
    }, 180*i); //move each dot one after the other, transition handled by CSS
    setTimeout(function($) { 
      _item.addClass("jmp");
      _item.css({"left": '-10%'});
      /* console.log("de-loop"); */
    }, 3000 + 180*i); //move each dot one back to start in order, transition removed via <.jmp> class
});
}, _timing);

$('.loader').css('display','none');
});