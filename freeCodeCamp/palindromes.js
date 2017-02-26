/*from freeCodeCamp
Return true if the given string is a palindrome. Otherwise, return false.  */

function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "")
  str =str.toLowerCase().split('');
  for (i = 0; i <= str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    } 
  }
  return true;
}

palindrome('racecar');