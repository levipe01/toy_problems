// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


var countPrimes = function(n) {
  var primeTester = function(n) {
    let isPrime = true
    let primeTest = 2
    while (primeTest < n) {
      if (n % primeTest === 0) {
        isPrime = false;
        break
      }
      primeTest++
    }
    return isPrime;
  };

  let count = 0
  let numCheck = n -1
  while (numCheck > 1) {
    if (primeTester(numCheck) === true) { count++ }
    numCheck--
  }
  return count
};