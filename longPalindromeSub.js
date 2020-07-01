// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
  var isPalindrome = function(x) {
    let xArr = x.toString().split('');
    let output = true;
    while (xArr.length > 1) {
      if (xArr[0] !== xArr[xArr.length - 1]) {
        output = false;
        break
      }
      xArr.shift();
      xArr.pop();
    }
    return output;
  };

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i, s.length).length < result.length) { break }
    for (let j = i; j < s.length; j++) {
      if (s.substring(i, s.length).length < result.length) { break }
      if (isPalindrome(s.substring(i, j + 1)) === true && s.substring(i, j + 1).length > result.length) {
        result = s.substring(i, j + 1)
      }
    }
  }

  return result
};