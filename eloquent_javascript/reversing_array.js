//write reverseArray function that takes an array and returns a new array with first array values in reverse
//write reverseArrayInPlace which changes given array to its reverseArrayInPlace

var myArray = [1,2,3,4,5,6,7,8,9,10];

function reverseArray(arr) {
  var revArr = [];
  for (i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}

reverseArrayInPlace(myArray);