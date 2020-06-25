// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


var reverse = function(x) {
  const isNeg = (x < 0) ? true : false;
  const xString = Math.abs(x).toString()
  let reversed = ''
  for (let i = xString.length - 1; i >=0; i--) {
    reversed += xString[i]
  }
  reversed = isNeg ? Number(reversed) * -1 : Number(reversed);
  return (Math.abs(reversed) > 2 ** 31 - 1) ? 0 : reversed;
};