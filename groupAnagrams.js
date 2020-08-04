// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


var groupAnagrams = function(strs) {
  const storage = {};
  const output = [];

  strs.map((str) => {
    const temp = str.split('').sort().join('');
    (!storage[temp]) ? storage[temp] = [str] : storage[temp].push(str);
  })

  Object.keys(storage).map((key) => {
    output.push(storage[key])
  })

  return output;
};