// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// 1. Naive version
function sumZero1(arr1) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
      if (arr1[i] - arr1[j]) {
        return [arr1[i], arr1[j]];
      }
    }
  }
}

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (arr[left] < arr[right]) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < 0) {
      left++;
    } else if (arr[left] + arr[right] > 0) {
      right--;
    }
  }
}

console.log(sumZero2([1, 2, 3]));
