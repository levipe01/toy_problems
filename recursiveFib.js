// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  let counter = 1;
  let fib = 0;
  function iterate(i, j) {
    if (counter === num) {return}
    counter += 1
    fib = i + j
    iterate(j, fib)
  }
  iterate(0, 1)
  return fib
}