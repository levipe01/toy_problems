// Given a rectangle of size n x m, find the minimum number of integer-sided squares that tile the rectangle.

// Example 1:


// Input: n = 2, m = 3
// Output: 3
// Explanation: 3 squares are necessary to cover the rectangle.
// 2 (squares of 1x1)
// 1 (square of 2x2)
// Example 2:


// Input: n = 5, m = 8
// Output: 5
// Example 3:


// Constraints:

// 1 <= n <= 12
// 1 <= m <= 12

var tilingRectangle = function(n, m) {
  count = 0;
  const findSquare = function(n, m) {
    count++
    if (n === m) {
      return;
    } else if (n < m) {
      m = m - n;
      findSquare(n, m);
    } else {
      n = n - m;
      findSquare(n, m);
    }
  }
  findSquare(n, m);
  return count;
};