$(document).ready(function () {
  var elemContainer = document.getElementById("dynapage-container");
  var jsDeps = [
    'https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@HEAD/tools/mainpage-workers-list/index.js',
    'https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@HEAD/tools/homepage-luckness-viewer/script.js',
    'https://cdn.jsdelivr.net/gh/Dustin-Jiang/D2308MainPageCode@HEAD/js/headlineEasterEgg.js'
  ]
  for (var idx = 0; idx < jsDeps.length; idx++) {
    var dep = jsDeps[idx];
    var elemJs = document.createElement("script");
    elemJs.setAttribute("src", dep);
    elemContainer.insertAdjacentElement("beforeend", elemJs);
  }
});
