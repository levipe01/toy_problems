// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701


var titleToNumber = function(input) {
  let output = 0
  let multiplier = 1
  while (input.length > 0) {
    output += (input[input.length - 1].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * multiplier
    input = input.substring(0, input.length - 1)
    multiplier *= 26
  }
  return output
};