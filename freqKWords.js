// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.


var topKFrequent = function(arr, k) {
  const words = [];
  const freq = [];

  for (let i = 0; i < arr.length; i++) {
    let index = words.indexOf(arr[i])
    if (index >= 0) {
      freq[index]++
    } else {
      words.push(arr[i])
      freq.push(1)
    }
  }

  const output = [];
  while (output.length < k) {
    let maxIndex = freq.indexOf(Math.max(...freq))
    output.push(words.splice(maxIndex, 1)[0])
    freq.splice(maxIndex, 1)
  }

  return output;
};