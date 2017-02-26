/* From freeCodeCamp
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
  for(i=0;i<arr.length;i++) {
    arr[i] = arr[i].toLowerCase();
  }
  for (i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1].charAt(i)) === - 1) {
      return false;
    }
  }
  return true;
} 
mutation(["Alien", "line"]);