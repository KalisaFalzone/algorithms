//given a phone number return an array of all the strings that could be spelled out with those
// numbers on a telephone.

function telephoneWords (digitString) {
  var results = [];

var recurse = function(build, remainder) {
  if (build.length === digitString.length) {
    results.push(build);
  } else {
      for (var j = 0; j < keys[remainder[0]].length; j++) {
        recurse(build+keys[remainder[0]][j], remainder.slice(1));
      }
  }
};
recurse('', digitString);
return results;
}

var keys = {
  2:['A', 'B', 'C'],
  3:['D', 'E', 'F'],
  4:['G', 'H', 'I'],
  5:['J', 'K', 'L'],
  6:['M', 'N', 'O'],
  7:['P', 'Q', 'R', 'S'],
  8:['T', 'U', 'V'],
  9:['W', 'X', 'Y', 'Z'],
  0:['0'],
  1:['1']
}