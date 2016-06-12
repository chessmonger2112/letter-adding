console.log("supppp");
function changeFont(delta){
  delta = delta | 1;
  var current = parseInt($("#para").css("font-size"));
  var incremented = current + delta;
  $("#para").css("font-size",incremented + "px");
}

function addText(text, delay){
  console.log("sup");
  setTimeout(()=> {
    lowerCase();
    var first = text[0];
    console.log(`First char: ${first}`);
    $("#para").append(first);
    var rest = text.slice(1);
    if (rest)
    {
      addText(rest, delay);
    }
    else
    {
      setTimeout(lowerCase, delay);
    }
  },
  delay);
}

function lowerCase()
{
  var originalText = $("#para").text();
  var lowerCased = originalText.toLowerCase();
  $("#para").text(lowerCased);
}
