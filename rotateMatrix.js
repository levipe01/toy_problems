// Write a function that rotates a NxN matrix 90 degrees.

var rotateMatrix = function(matrix) {
  var output = []

  for(var i = 0; i < matrix.length ; i++) {
    var row = []
    for(var j = matrix[i].length - 1; j >= 0 ; j--) {
      row.push(matrix[j][i])
    }
    output.push(row)
  }
  return output
};