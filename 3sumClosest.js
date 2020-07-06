// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


var threeSumClosest = function(nums, target) {
  let output = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (Math.abs(target - output) > Math.abs(target - (nums[i] + nums[j] + nums[k]))) {
          output = nums[i] + nums[j] + nums[k]
          if (output === target) {break}
        }
      }
    }
  }
  return output;
};