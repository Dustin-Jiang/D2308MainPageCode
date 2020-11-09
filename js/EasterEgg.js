$(document).ready(function(){
  date = new Date();
  if (date.getDate() == 11 && date.getMonth() == 10) {
    $("div.psgContainer img")[0].src = "https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@master/img/MainPage/EasterEgg.png";
    $(".psgContainer h1")[0].innerHTML = '我们是<del style="color:#aaa;">Single Dogs</del><span class="primaryColor">D2308丹霄殿!</span>';
  }
})
