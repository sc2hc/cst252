
/**
 * Author:   Henry
 * Created:   2/28/2022
 * public domain
 *
 *
 **/
 window.onload = function () {

    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    var new1El = document.createElement("button");

    new1El.innerHTML = "Welp";
    new1El.id = "new-one";

    var new2El = document.createElement("button");
    new1El.id = "new-two";

    new2El.innerHTML = "Oof";

    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);


    new1El.style.color = "blue";
    outputEl.style.border = "dashed 2px white";

 }
