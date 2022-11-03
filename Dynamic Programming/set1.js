//When to use Dynamic programming
// - When We optimal Substructure present - break down into smaller pieces
//- When we have overlapping sub Problems -  Memoisation
function fib(n) {
  let memo = {};
  let sum;
  function helper(n) {
    if (n <= 2) return 1;
    if (memo[n] != null) return memo[n];

    sum = helper(n - 1) + helper(n - 2);
    memo[n] = sum;
    return sum;
  }
  helper(n);
  return sum;
}

function fib2(n, memo = []) {
  if (memo[n] != null) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib3(n, memo = {}) {
  if (memo[n] != null) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fib(100));
