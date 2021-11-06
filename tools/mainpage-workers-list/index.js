const memberTable = [
  ["丁林叶","王昱涵","姜欣宜","戈涵","郑旖馨","胡高源","苏一诺"],
  ["黄楚淇","彭可","史晶盈","孙毓谦","孔烨容","胡晨悦","王诗如"],
  ["吴沁纯","王可圆","王涵双","任思琪","刘嘉","李佳艺","王乐怡"],
  ["郑广渔","陈佳熠","黄熠","李朔瑜","王艺霖","章益萌","张佳宁"],
  ["陈旭楠","陈南澄","蔡昊峰","吴东明","宋天逸","陈嘉顺","徐佳宁"],
  ["丁鹏轶","周涛","叶思源","蒋涛涛","吴心宇","蒋浩天","赵伟杰"]
];

function getYearWeek(endDate) {
  //本年的第一天
  var beginDate = new Date(endDate.getFullYear(), 0, 1);
  //星期从0-6,0代表星期天，6代表星期六
  var endWeek = endDate.getDay();
  var beginWeek = beginDate.getDay();
  //计算两个日期的天数差
  var millisDiff = endDate.getTime() - beginDate.getTime();
  var dayDiff = Math.floor((millisDiff + beginWeek * (24 * 60 * 60 * 1000)) / 86400000);
  return Math.floor(dayDiff / 7); //Plus 1 to adapt
}

$(document).ready(function () {
  const d = new Date();
  const weekNumber = getYearWeek(d);
  const groupSize = 7;
  const magicNumber = 6;
  const group = (weekNumber + magicNumber) % groupSize;
  const pageSrc = 'https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@HEAD/tools/mainpage-workers-list/index.html'

  var htmlXhr = new XMLHttpRequest();
  htmlXhr.addEventListener("load", function () {
    if (htmlXhr.status === 200) {
      var element = $("#homepage-workers-list")[0];
      element.innerHTML = htmlXhr.responseText;

      for (i in memberTable) {
        item = `<li>${memberTable[i][group]}</li>`;
        $(".showcase")[0].innerHTML += item;
      }
    }
  });
  htmlXhr.open('GET', pageSrc);
  htmlXhr.send();
});
