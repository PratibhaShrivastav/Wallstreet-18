$(document).ready(function(){
  $.getJSON("https://wallstreet-18.herokuapp.com/leaderboard/update/",function(data){
    var check;
    for(var i=0;i<data.data.length;i++)
    {
      check= $('<tr/>');
	    check.append("<td>"+data.data[i].name+"</td>");
      check.append("<td>"+data.data[i].username+"</td>");
      check.append("<td>"+data.data[i].holding+"</td>");
      $('table').append(check);
    }
  });
  setTimeout(function(){
   window.location.reload(1);
}, 4000);
});
