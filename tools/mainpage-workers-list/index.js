const memberTable = [
  [
    "丁林叶","黄熠","刘嘉","苏一诺","王诗如","张佳宁"
  ],
  [
    "陈佳熠","黄楚淇","李朔瑜","宋天逸","王乐怡","徐佳宁"
  ],
  [
    "蔡昊峰","陈南澄","丁鹏轶","蒋涛涛","吴心宇","赵伟杰"
  ],
  [
    "戈涵","姜欣宜","彭可","孙毓谦","王艺霖","章益萌"
  ],
  [
    "胡高源","李佳艺","史晶盈","王可圆","吴沁纯","郑旖馨"
  ],
  [
    "胡晨悦","孔烨容","任思琪","王涵双","王昱涵","郑广渔"
  ],
  [
    "陈嘉顺","陈旭楠","蒋浩天","吴东明","叶思源","周涛"
  ]
]

function getYearWeek(endDate) {
    //本年的第一天
    var beginDate = new Date(endDate.getFullYear(), 0, 1);
    //星期从0-6,0代表星期天，6代表星期六
    var endWeek = endDate.getDay();
    if (endWeek == 0) endWeek = 7;
    var beginWeek = beginDate.getDay();
    if (beginWeek == 0) beginWeek = 7;
    //计算两个日期的天数差
    var millisDiff = endDate.getTime() - beginDate.getTime();
    var dayDiff = Math.floor(( millisDiff + (beginWeek - endWeek) * (24 * 60 * 60 * 1000)) / 86400000);
    return Math.ceil(dayDiff / 7);
}

$(document).ready(function() {
  const d = new Date();
  const weekNumber = getYearWeek(d);
  const groupSize = 6
  const magicNumber = 2
  const group = (weekNumber + magicNumber) % groupSize;
  
  $("#homepage-workers-list")[0].innerHTML = '<div class="psgContainer">\
  <span>本周轮到的值日组长是</span>\
  <div>\
    <div class="number primaryColor" id="leader">∞</div>\
  </div>\
  <hr/>\
  <span>这一组的组员有</span>\
  <div class="showcase"></div>\
</div>'
  
  $("#leader")[0].innerHTML = memberTable[0][group];
  
  for(i in memberTable) {
    item = `<li>${memberTable[i][group]}</li>`
    $(".showcase")[0].innerHTML += item;
  }
})