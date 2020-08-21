// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.



// Constraints:

// intervals[i][0] <= intervals[i][1]



var merge = function(intervals) {
  ints = intervals.slice();
  ints.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < ints.length - 1; i++) {
    if (ints[i][1] >= ints[i + 1][0]) {
      let lowerBound = (ints[i][0] < ints[i + 1][0]) ? ints[i][0] : ints[i + 1][0];
      let upperBound = (ints[i][1] > ints[i + 1][1]) ? ints[i][1] : ints[i + 1][1];
      ints.splice(i, 2, [lowerBound, upperBound])
      i--
    }
  }
  return ints;
};