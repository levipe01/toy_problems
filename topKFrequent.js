// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.



var topKFrequent = function(nums, k) {
  const storage = {}
  for (let i = 0; i < nums.length; i++) {
    if(storage[nums[i]]) {
      storage[nums[i]]++
    } else {
      storage[nums[i]] = 1
    }
  }
  const output = {}
  let minKey = Object.keys(storage)[0]
  let minVal = storage[Object.keys(storage)[0]]

  for (let j = 0; j < Object.keys(storage).length; j++) {
    if (Object.keys(output).length < k) {
      output[Object.keys(storage)[j]] = storage[Object.keys(storage)[j]];
      if (storage[Object.keys(storage)[j]] < minVal) {
        minKey = Object.keys(storage)[j]
        minVal = storage[Object.keys(storage)[j]]
      }
    } else if (storage[Object.keys(storage)[j]] > minVal) {
      delete output[minKey]
      output[Object.keys(storage)[j]] = storage[Object.keys(storage)[j]]
      minKey = Object.keys(output)[0]
      minVal = output[Object.keys(output)[0]]
      for (let k = 0; k < Object.keys(output).length; k++) {
        if (output[Object.keys(output)[k]] < minVal) {
          minKey = Object.keys(output)[k]
          minVal = output[Object.keys(output)[k]]
        }
      }
    }
  }
  return Object.keys(output);
};