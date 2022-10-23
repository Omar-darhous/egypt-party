$("a[href^='#'").click(function (e)
{
    let ahref = $(e.target).attr("href");
    let sectionOffset = $(ahref).offset().top;
    $("html,body").animate({scrollTop: sectionOffset},500)
})


$(document).ready(function(){
  $('#show').click(function() {
    $('.menu').toggle("slide");
  });
});

$(document).ready(function(){
  $('#show2').click(function() {
    $('.menu2').toggle("slide");
  });
});

$(document).ready(function(){
  $('#show3').click(function() {
    $('.menu3').toggle("slide");
  });
});


$(document).ready(function(){
  $('#show4').click(function() {
    $('.menu4').toggle("slide");
  });
});




$("#site-par i").click(function(){
  let boxWidth = $('.box').outerWidth()
  if($('#site-par').css('left')=== '0px')
  {
    $("#site-par").animate({left: `-${boxWidth}`},1000);
  }
  else
  {
    $("#site-par").animate({left: `0px`},1000);
  }
  
})














var countDownDate = new Date("Jan 5 , 2023 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
 









  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);












$(document).ready(function () {
  var max_length = 100;
  $('textarea').keyup(function () {
      var len = max_length - $(this).val().length;
      $('.GFG').text(len);
  });

});