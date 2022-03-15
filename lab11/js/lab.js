
/**
 * Author:   Henry
 * Created:   3/8/2022
 * public domain
 *
 *
 **/

$("#output").html("<button id=Lebutton>Clone")
$("#Lebutton").click(function(){
    $("#output").append("<button id=Lebutton>Clone");
    $("#Lebutton").css("background-color", "#81FD0D");
  }
)

$("#heh").html("<button id=ZAbutton>Flashy Big Red Button With a Skull On IT")
$("#ZAbutton").click(function(){
  alert("TACTICAL NUKE INCOMING!!!!!!");
  $("#ZAbutton").css("background-color", "#FF0000");
  }
)
