// A JS impementation of this challenge: 
// https://www.youtube.com/watch?v=GJdiM-muYqc

const findFirstRepeat = (arr) => {
  let myObj = {};
  let firstRepeat = '';
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    myObj[arr[i]] = !isNaN(myObj[arr[i]]) ? count += myObj[arr[i]] : count;
    if (myObj[arr[i]] === 2) {
      firstRepeat = arr[i];
      break;
    }
  }
  return firstRepeat;
};

findFirstRepeat(['a', 'b', 'c', 'b', 'd', 'c', 'c', 'c', 'a']);  // b
