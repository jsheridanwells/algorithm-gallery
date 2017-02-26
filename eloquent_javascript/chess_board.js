/* “Write a program that creates a string that represents an 8×8 chess grid, using newline characters to separate lines. ” */

var size = 8;
var hash = '';

function chessBoard(size) {
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
      for (j =0; j < size / 2; j++){
        hash += ' #';
      }
      
    } else {
      for (j =0; j < size / 2; j++){
        hash += '# ';
      }
    }
    hash += '\n';
  }
  return hash;
}
chessBoard(size);