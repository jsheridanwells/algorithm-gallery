//write a range function that takes 2 arguments, start and end, and returns an array with all of the numbers between
    //bonus: include step argument that also works in reverse
//write a sum function that returns the sum of all values in a given array

function range(start, end, step) {
  if (step === null) step = 1;
  var myRange = [];
  if (step < 0) {
    for (i = end; i > start; i += step) {
      myRange.push(i);
    } 
  }  else {
        for(var i = start; i <= end; i+= step) {
        myRange.push(i);
      }
    }
  return myRange;
  }
function sum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
sum(range(1,10));