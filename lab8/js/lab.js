
/**
 * Author:   Henry
 * Created:   2/26/2022
 * public domain
 *
 *
 **/


 var outputEl = document.getElementById("output");

 function isOdd(x){
    return (x % 2 !== 0);
 }

 // test function
 console.log("Is 1 odd? ", isOdd(1));
 console.log("Is 2 odd? ", isOdd(2));

 array = [3080, 81, 3, 25, 6, 21, 9]
 console.log("My array", array);
 // add array to document
 var newEl = document.createElement("p");
 newEl.innerHTML = "Original array:" + JSON.stringify(array);
 outputEl.appendChild(newEl);

 var result = array.map(isOdd);
 // should return [false, true, true, true, false, true, true]
 console.log("Test of oddness of array:", result);
 // add array to document
 var newEl = document.createElement("p");
 newEl.innerHTML = "Oddness of array:" + JSON.stringify(result);
 outputEl.appendChild(newEl);

 var result = array.map(function(x){
    return x ** 0.5;
 })

 console.log("Squareroot of array:", result);
 // add array to document
 var newEl = document.createElement("p");
 newEl.innerHTML = "Squareroots of array:" + JSON.stringify(result);
 outputEl.appendChild(newEl);
