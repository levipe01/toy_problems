// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
  let targetIndex = -1
  let indexBuff = 0
  const iterate = (i, searchArr) => {
    if (searchArr[i] === target ) {
      targetIndex = i
      return
    }
    if (searchArr.length === 0) {return}
    if (searchArr[i] > target) { iterate(Math.floor(i / 2), searchArr.slice(0, i))}
    if (searchArr[i] < target) {
      indexBuff += (i + 1)
      iterate(Math.floor(searchArr.slice(i + 1, searchArr.length).length / 2), searchArr.slice(i + 1, searchArr.length))
    }
  }
  iterate(Math.floor(nums.length / 2), nums)
  if (targetIndex === -1) {return [-1, -1]}
  let i = targetIndex + indexBuff;
  let j = targetIndex + indexBuff;
  while (target === nums[i]) {i--}
  while (target === nums[j]) {j++}
  return [i + 1, j - 1];
};