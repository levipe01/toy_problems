// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


var wordBreak = function(s, wordDict) {
  let output = false
  wordDict = wordDict.sort(function(a, b) {
              return b.length - a.length;
            });

  const search = (s) => {
    if (s.length === 0) {
      output = true
      return
    }
    for (let i = 0; i < wordDict.length; i++) {
      if (s.substring(0, wordDict[i].length) === wordDict[i]) {
        search(s.substring(wordDict[i].length, s.length))
      }
      if (output === true) {break}
    }
  }
  search(s)
  return output
};