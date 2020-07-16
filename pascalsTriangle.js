// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  if (numRows === 0) {return []}
  let output = [[1]]
  let count = 1
  while (count < numRows) {
    let newLevel = [1]
    for (i = 0; i <= output[output.length - 1].length - 1; i++) {
      newLevel.push(output[output.length - 1][i] + output[output.length - 1][i + 1] || output[output.length - 1][i])
    }
    output.push(newLevel)
    count++
  }
  return output
};