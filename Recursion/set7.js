function fib(num) {
  if (num <= 1) {
    return num;
  }
  return fib(num - 2) + fib(num - 1);
}
console.log(fib(5));
