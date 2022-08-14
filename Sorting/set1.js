//Javascript inbuilt sort

function numToCompare(num1, num2) {
  return num1 - num2;
}

console.log([4, 5, 7, 10, 12, 15, 2, 4, 6, 8].sort(numToCompare));

function comapreByLength(str1, str2) {
  return str1.length - str2.length;
}

