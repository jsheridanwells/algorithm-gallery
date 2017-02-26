/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
*/

function rot13(str) {
  var deciphered = '';
  for (i = 0; i < str.length; i++) {
	  var code;
	  code = str.charCodeAt(i);
	    if (code > 64 && code <= 77) {
		    code = code +13;
	    }
	    else if ( code > 77 && code <= 90) {
		    code = code - 13;
	    }
	    deciphered += String.fromCharCode(code);
  }
  return deciphered;
}

rot13('SERR CVMMN!');