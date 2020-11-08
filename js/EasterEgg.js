$(document).ready(function(){
  date = new Date();
  if (date.getDate() == 11 && date.getMonth() == 11) {
    $(".psgContainer:nth-child(1) .classImg").src("https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@master/img/MainPage/EasterEgg.png");
  }
})