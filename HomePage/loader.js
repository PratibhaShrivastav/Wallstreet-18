$(document).ready(function(){
  $("#loader").fadeOut(1200);
  function showpage(){
    $("#bg").fadeOut();
    $(".card").css({"display":"block"});
      $(".complete").css({"display":"block"});
  }
setTimeout(showpage,700);
});
