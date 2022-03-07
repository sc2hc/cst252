
/**
 * Author:   Henry
 * Created:   3/5/2022
 * public domain
 *
 *
 **/
 var button = document.getElementById('leButton');

 function sortText(text) {
 	return text.split('').sort().reverse().join('');
 }

 // button.addEventListener('click', function() {
 // 	alert("Stop clicking me!");
 // });

  button.addEventListener('click', function() {

   var inputText = document.getElementById('name');
   var stuff = inputText.value;
   var newStuff = sortText(stuff);
   var newText = ".Z.Z.Z.  Oh, HI... " + newStuff;
 	 var meh = document.getElementById('gorogoro');
   meh.innerHTML = newText;

 });
