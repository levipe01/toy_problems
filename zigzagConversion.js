// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

var convert = function(s, numRows) {
  const equalizer = () => {
    for (let i = 0; i < arrDisplay.length; i++) {
      if (arrDisplay[i].length !== colIndex) {
        arrDisplay[i].push(null)
      }
    }
  }

  sArr = s.split('');
  arrDisplay = [];
  for (let i = 0; i < numRows; i++) {
    arrDisplay.push([])
  }

  let colIndex = 0
  while (sArr.length > 0) {
    let rowIndex = 0
    let count = 0
    while (rowIndex < numRows) {
      arrDisplay[rowIndex].push(sArr.shift())
      rowIndex++
      count++
    }
    rowIndex--
    rowIndex--
    while (count < numRows * 2 - 2) {
      arrDisplay[rowIndex].push(sArr.shift())
      colIndex++
      equalizer()
      count++
      rowIndex--
    }
  }

  let output = ''
  for (let k = 0; k < arrDisplay.length; k++) {
    for (let l = 0; l < arrDisplay[k].length; l++) {
      if (arrDisplay[k][l] !== null && arrDisplay[k][l] !== undefined)
      output += arrDisplay[k][l]
    }
  }
  return output
};
