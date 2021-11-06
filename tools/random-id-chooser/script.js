$(document).ready(function() {
  setCheckbox(Number($("#numberSelector").val()));
  
  $("#plus").click(function() {
    number = Number($("#numberSelector").val());
    number += 1;
    $("#numberSelector").val(number);
    setCheckbox(number);
  });

  $("#minus").click(function() {
    number = Number($("#numberSelector").val());
    number -= 1;
    $("#numberSelector").val(number);
    setCheckbox(number);
  });
  
  $(".startButton button").click(function() {
    all = getChooserArray();
    num = Math.floor(Math.random() * all.length);
    $(".number")[0].innerHTML = all[num];
  })
});

function setCheckbox(number) {
  number ++;
  htmlContent = "";
  for (i=1;i < number; i++) {
    htmlContent += `<label for="${i}">\n<input type="checkbox" id="${i}" name="${i}" checked="checked">\n<span>${i}</span>\n</label>\n`;
  }
  $("#chooser")[0].innerHTML = htmlContent;
}

function getChooserArray() {
  checkbox = document.querySelectorAll("#chooser input");
  result = [];
  for (i in checkbox) {
    if (checkbox[i].checked) {
      result.push(Number(i) + 1);
    }
  }
  console.log(result);
  return result;
}