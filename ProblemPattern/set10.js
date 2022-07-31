//Same frequency for given 2 numbers
function sameFrequency(num1, num2) {
  let text1 = num1.toString().split("").sort();
  let text2 = num2.toString().split("").sort();

  if (text1.length != text2.length) return false;
  if (text1.join() == text2.join()) {
    return true;
  } else {
    return false;
  }
}
console.log(sameFrequency(232, 322));
