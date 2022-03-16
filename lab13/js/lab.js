
function sorter(str) {
    len = str.length;
    mod = len % 5;

  if (mod == 0){
    return "Firebender";
  }
  else if (mod == 1){
    return "Airbender";
  }
  else if (mod == 2){
    return "Waterbender";
  }
  else if (mod == 3){
    return "Earthbender";
  }
  else if (mod == 4){
    return "Avatar";
  }
}

var leButton = document.getElementById("totsugeki");
leButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var soul = sorter(name);
  newText = "<p>You have been born as:" + soul + "</p>";
  document.getElementById("output").innerHTML = newText;
});
