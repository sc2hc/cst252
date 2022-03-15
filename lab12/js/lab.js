
/**
 * Author:   Henry
 * Created:   3/11/2021
 * public domain
 *
 *
 **/

array=["yo","meep","pain","shindemoii"];
var count1 = 0;
var count2 = 0;
var count3 = 0;

$("#hashirei").click(function(){
  $("#challenge").addClass(array[count1]);
  count1++;
  if (count1 > array.length) {
		count1 = 0;
    $("#challenge").removeClass("yo meep pain shindemoii");
	}
  }
)

$("#nigeru").click(function(){
  $("#problemo").addClass(array[count2]);
  count2++;
  if (count2 > array.length) {
		count2 = 0;
    $("#problemo").removeClass("yo meep pain shindemoii");
	}
  }
)

$("#totsugeki").click(function(){
  $("#results").addClass(array[count3]);
  count3++;
  if (count3 > array.length) {
		count3 = 0;
    $("#results").removeClass("yo meep pain shindemoii");
	}
  }
)
