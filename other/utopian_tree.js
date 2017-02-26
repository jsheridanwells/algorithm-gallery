var cycles = 5;

function getHeight(cycles) {
    var tree = 1;
    for (var i = 0; i < cycles; i++) {
      if (tree % 2 !== 0) {
        tree *=2;
      } else {
        tree += 1;
      }
    }
    return tree;
}
getHeight(cycles);