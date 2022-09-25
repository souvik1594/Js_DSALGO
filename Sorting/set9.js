//Radix Sort

function radixSort(arr) {
  let maxDigit = mostDigits(arr);
  let newArrObj = new Map();
  for (let k = 0; k <= maxDigit; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digitAt = getDigit(arr[i], k);
      digitBuckets[digitAt].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

function getDigit(num, place) {
  let divider = Math.pow(10, place);
  let result = num / divider;
  return Math.floor(result % 10);
}

// console.log(getDigit(124567, 8));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let i of arr) {
    if (digitCount(i) > max) {
      max = digitCount(i);
    }
  }
  return max;
}
console.log(radixSort([100, 1, 3, 10022, 3241, 42414421441]));
