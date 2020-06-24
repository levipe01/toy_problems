// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.


var threeSum = function(nums) {
  nums.sort(function(a, b) { return a - b });
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let k = j + 1
      while (nums[i] + nums[j] + nums[k] <= 0) {
        if (nums[i] + nums[j] + nums[k] === 0 && isUnique(output, [nums[i], nums[j], nums[k]]) === true) {
          output.push([nums[i], nums[j], nums[k]]);
        }
        k++
      }
    }
  }
  return output;
};

var isUnique = function(solutions, testCase) {
  for (let i = 0; i < solutions.length; i++) {
    let testSolution = solutions[i];
    let diffFound = false;
    for (let j = 0; j < testSolution.length; j++) {
      if (testSolution[j] !== testCase[j]) {
        diffFound = true;
        break;
      }
    }
    if (!diffFound) { return false }
  }
  return true;
}