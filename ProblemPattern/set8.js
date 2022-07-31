// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

//brute force
function maxSubarraySum_1(arr, n) {
  if (arr.length === 0) return console.log("null");
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  console.log(max);
}

//GoodWay
function maxSubarraySum(arr, n) {
  let max = 0;
  let temp = 0;
  let move;

  if (arr.length === 0) return null;

  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }

  max = temp;
  move = 0;
  for (let j = n; j < arr.length; j++) {
    temp = temp + arr[j] - arr[move];
    move++;
    max = Math.max(max, temp);
    console.log(max, temp);
  }
  console.log(max);
  return max;
}
