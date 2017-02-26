//From Eloquent Javascript: “...write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted characters). (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function”

var str = 'assassa';

function countChar(str, char) {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  } 
  return count;
}

countChar(str, 'a');