//write a script that takes two arguments and returns their minimum
var val1 = 20;
var val2 = 15;

function returnMin(x, y) {
  var check = x - y;
  if (check < 0) {
    return y 
  } else {
    return x;
  }
}
returnMin(val1, val2);