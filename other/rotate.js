var myArr = [1, 2, 3, 4, 5];
var mySteps = 2;

function rotate(arr, steps) {
  var popped, i;
  for (i = 0; i < steps; i++) {
    popped = arr.pop();
    arr.unshift(popped);
  }
  return arr;
}
rotate(myArr, mySteps);