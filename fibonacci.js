function fib(n) {
  if (n <= 1) return 1;

  let curr = 1;
  let prev = 1;

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr += prev;
    prev = temp;
  }

  return curr;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
