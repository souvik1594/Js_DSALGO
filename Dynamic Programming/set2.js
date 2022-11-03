//Using Tabulation
function fib(n) {
  if (n <= 2) return 1;
  var tabulation = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tabulation[i] = tabulation[i - 1] + tabulation[i - 2];
  }
  return tabulation[n];
}
