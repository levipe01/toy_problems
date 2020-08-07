// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


var frequencySort = function(s) {
  const chars = [];
  const freqs = [];
  for (let i = 0; i < s.length; i++) {
    const index = chars.indexOf(s[i])
    if (index < 0) {
      chars.push(s[i]);
      freqs.push(1);
    } else {
      freqs[index]++;
    }
  }

  let output = ''
  while (freqs.length > 0) {
    let maxIndex = freqs.indexOf(Math.max(...freqs))
    for (j = 0; j < Math.max(...freqs); j++) {
      output += chars[maxIndex];
    }
    chars.splice(maxIndex, 1);
    freqs.splice(maxIndex, 1);
  }
  return output;
};