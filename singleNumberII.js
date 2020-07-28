// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99


var singleNumber = function(nums) {
  let storage = {}
  for (let i = 0; i < nums.length; i++) {
    if (storage[nums[i].toString()] === undefined) {
      storage[nums[i].toString()] = 1
    } else {
      storage[nums[i].toString()]++
    }
    if (storage[nums[i]] === 3) {delete storage[nums[i]]}
  }
  return Number(Object.keys(storage)[0])
};