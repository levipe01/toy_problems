// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


// Constraints:

// s consists only of printable ASCII characters.


var isPalindrome = function(s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '')
  str = str.replace(/\s/g, '');
  let arr = str.split('')
  while (arr.length > 1) {
    if (arr[0].toLowerCase() === arr[arr.length - 1].toLowerCase()) {
      arr.shift()
      arr.pop()
    } else {
      console.log(arr[0], arr[arr.length - 1])
      return false
    }
  }
  return true
};