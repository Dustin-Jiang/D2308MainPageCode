$(document).ready(function() {
  initScore()
  $(".switcher").click(function() {
    $(".switcher.selected").removeClass("selected");
    var clicked = $(this);
    clicked.addClass("selected");
    var changeTo = clicked[0].getAttribute("toggle-tab");
    var tabs = document.querySelectorAll(".score")
    for (i=0; i < tabs.length; i++) {
      var tabName = tabs[i].attributes["tabname"].nodeValue;
      if (tabName == changeTo) {
        $(".score").addClass("hidden");
        $(".score")[i].classList.remove("hidden");
      }
    }
  })
})

function initScore() {
  $.ajax("https://nba-scoreboard-backend.vercel.app/score/today")
    .done(function(data) {
      for (i of data.games) {
        $(".score#today")[0].innerHTML += 
          `<div class="game">\
            <div class="pointContainer">\
              <span>${i.homeTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "home") ? "bigger" : ""}">${i.score.homeScore}</h1>\
            </div>\
            <div class="statusContainer">\
              ${i.status}\
            </div>\
            <div class="pointContainer">\
              <span>${i.awayTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "away") ? "bigger" : ""}"">${i.score.awayScore}</h1>\
            </div>\
          </div>`
      }
  })
  $.ajax("https://nba-scoreboard-backend.vercel.app/score/previous")
    .done(function(data) {
      for (i of data.games) {
        $(".score#previous")[0].innerHTML += 
          `<div class="game">\
            <div class="pointContainer">\
              <span>${i.homeTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "home") ? "bigger" : ""}">${i.score.homeScore}</h1>\
            </div>\
            <div class="statusContainer">\
              ${i.status}\
            </div>\
            <div class="pointContainer">\
              <span>${i.awayTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "away") ? "bigger" : ""}"">${i.score.awayScore}</h1>\
            </div>\
          </div>`
      }
  })
  $.ajax("https://nba-scoreboard-backend.vercel.app/score/next")
    .done(function(data) {
      for (i of data.games) {
        $(".score#next")[0].innerHTML += 
          `<div class="game">\
            <div class="pointContainer">\
              <span>${i.homeTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "home") ? "bigger" : ""}">${i.score.homeScore}</h1>\
            </div>\
            <div class="statusContainer">\
              ${i.status}\
            </div>\
            <div class="pointContainer">\
              <span>${i.awayTeam.displayAbbr}</span>\
              <h1 class="number ${(i.score.winner == "away") ? "bigger" : ""}"">${i.score.awayScore}</h1>\
            </div>\
          </div>`
      }
  })
}