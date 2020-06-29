// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  let longestSub = 0;

  for (let i = 0; i < s.length; i++) {
    let subStorage = {};
    subStorage[s[i]] = 1;
    count = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (subStorage[s[j]] !== undefined) { break }
      subStorage[s[j]] = 1;
      count += 1;
    }
    longestSub = (count > longestSub) ? count : longestSub;
  }
  return longestSub;
};