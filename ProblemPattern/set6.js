// Implement a function called countUniqueValues, which accepts a sorted array, and
// counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }

  let left = 0;
  let right = 1;
  let counter = 1;
  while (right < arr.length) {
    if (arr[right] !== arr[left]) {
      counter++;
    }
    left++;
    right++;
  }
  return counter;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
