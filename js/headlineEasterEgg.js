$(document).ready(function() {
    clickTime = 5
    timeout = 500
    click = 0
    $("#headline-easter-egg")[0].onclick = function() {
        click += 1;
        if (click >= clickTime) {
            displayEasterEgg()
        }
        setTimeout(function() {
            click = 0
        }, timeout * (click + 1))
    }
})

function displayEasterEgg() {
    model = $(".model-hidden")[0]
    model.classList.add("model");
    model.classList.remove("model-hidden");
    model.onclick = function() {
        model = $(".model")[0]
        model.classList.add("model-hidden");
        model.classList.remove("model")
    }
}
