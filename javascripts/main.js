console.log("supppp");
function changeFont(delta){
  delta = delta | 1;
  var current = parseInt($("#para").css("font-size"));
  var incremented = current + delta;
  $("#para").css("font-size",incremented + "px");
}

function addText(text, interval){
  setTimeout(()=> {
    $("#para").append(text[0]);
    var rest = text.slice(1);
    if (rest)
    {
      addText(rest, interval);
    }
  },
  interval);
}
