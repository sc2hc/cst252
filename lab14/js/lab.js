
/**
 * Author:   Henry
 * Created:   3/21/2022
 * public domain
 *
 *
 **/

for (var i = 1; i < 200; i++) {
  var txt = "";
  if (i%105 == 0) {
   txt += "FizzBuzzBOOM";
  }
  else if (i%35 == 0) {
   txt += "BuzzBOOM";
  }
  else if (i%21 == 0) {
   txt += "FizzBOOM";
  }
  else if (i%3 == 0) {
   txt += "Fizz";
  }
  else if (i%5 == 0) {
   txt += "Buzz";
  }
  else if (i%7 == 0) {
   txt += "BOOM";
  }
  else {
    console.log(txt+'!');
  }
  $("#output").append("<p>" + i + "<br>" + txt );
}
