// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5


var lengthOfLastWord = function(s) {
  if (s.length === 0) {return 0}
  let i = s.length - 1
  let count = 0
  while (s[i] === ' ') {i--}
  while (s[i] !== ' ' && i >= 0) {
    i--
    count++
  }
  return count
};