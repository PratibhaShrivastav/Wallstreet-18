//var mychart=document.getElementById("chart").getContext("2d");
var labelsss,datass;
$(document).ready(function(){
  $.ajax({
    type:'GET',
    url: 'https://wallstreet-18.herokuapp.com/sellbuy/graph/53',
    dataType:'json',
    success: function(data) {
       labelsss= data.map(function(e){
        return e.y;
      }).get();
       datass= data.map(function(e){
        return e.x;
      }).get();
    }
  });
});
Chart.defaults.global.defaultFontColor = 'gray';
Chart.defaults.global.defaultFontFamily ="'Signika', sans-serif";
Chart.defaults.global.defaultFontSize = 12;
var ctx = document.getElementById("c").getContext("2d");
  var data = {
    type:'line',
    data: {
      labels:/*['10:00am','11:00am', '12:00am', '1:00am', '2:00am', '3:00am','4:00am', '5:00am'],*/labelsss,
      datasets:[{
        label:'You',
        /*[
          259.2,
          267.3,
          290.0,
          289.6,
          301.3,
          300.0,
          310.0,
          311.9
        ],*/
        data: datass,
        fill: false,
        borderColor: "red",
        pointHoverBackgroundColor : "red",
        borderWidth: "1px",
      }]
    },
  }
  var data1= {
    type:'line',
  data: {
    labels:['10:00am','11:00am', '12:00am', '1:00am', '2:00am', '3:00am','4:00am', '5:00am'],
    datasets:[{
      label:'Amount',
      data:[
        340.0,
        350.8,
        345.2,
        347.3,
        350.0,
        349.7,
        359.0,
        357.2
      ],
      fill: false,
      borderColor: "red",
      pointHoverBackgroundColor : "red",
      borderWidth: "1px",
    }]
  },
}
var myNewChart = new Chart(ctx, data);
function displayfirst(){
var myNewChart = new Chart(ctx, data);
}
function displaysecond(){
var secondchart = new Chart(ctx, data1);
}
