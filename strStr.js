// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

var strStr = function(haystack, needle) {
  if (needle === '') {return 0}
  if (needle.length > haystack.length) {return -1}
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0] && needle.length === haystack.substring(i, i + needle.length).length) {
      let subString = haystack.substring(i, i + needle.length)
      let j = 0
      let isEqual = true
      while (j < subString.length) {
        console.log(subString[j], needle[j])
        if (subString[j] !== needle[j]) {
          isEqual = false
          break
        }
        j++
      }
      if (isEqual === true) {return i}
    }
  }
  return -1
};