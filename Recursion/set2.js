//Factorial recurion

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log("Total : " + factorial(4));
