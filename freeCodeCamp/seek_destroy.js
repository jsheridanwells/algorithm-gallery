/*from freeCodeCamp
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/
function destroyer(arr) {
  var arr2 = Array.prototype.slice.call(arguments);
  var arr1 = arr2.shift();
  var destroyed = arr1.filter( function(val) {
    return arr2.indexOf(val) === -1
  });
  return destroyed;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3,);


