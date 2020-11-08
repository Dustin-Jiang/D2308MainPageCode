$(document).ready(function(){
  date = new Date();
  if (date.getDate() == 11 && date.getMonth() == 10) {
    $("#warp > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > div:nth-child(9) .classImg")[0].src = "https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@master/img/MainPage/EasterEgg.png";
    $(".psgContainer h1")[0].innerHTML = '我们是<del>Single Dogs</del><span class="primaryColor">D2308丹霄殿!</span>';
  }
})
