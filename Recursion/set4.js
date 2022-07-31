// Write a function called Power to micmic Math.pow() - 2^2 =4 3^3 =27

function power(number, pow) {
  let count = 0;
  total = 1;

  function helper(number1, pow1) {
    if (count == pow1) return total;
    total *= number1;
    count++;
    return helper(number1, pow1);
  }
  return helper(number, pow);
}

console.log(power(2, 3));
