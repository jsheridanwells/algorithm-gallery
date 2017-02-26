var n = 6;
function StairCase(n) {
  var space = ' ';
  var hash = '#';
  var steps = '';
  for ( i = 0; i < n; i++) {
    steps += space.repeat(n - i) + hash.repeat(i + 1) + '\n';
  }
  return steps;
}
StairCase(n);
