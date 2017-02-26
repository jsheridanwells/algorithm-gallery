/* from freeCodeCamp
Check if a string (first argument, str) ends with the given target string (second argument, target). */

function confirmEnding(str, target) {
  var ending = str.substr(-1 * target.length, target.length);
    if (ending === target) {
      return true;
    } else {
      return false;
    }
}

confirmEnding("Bastian", "tian");