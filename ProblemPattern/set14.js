function maxSubarraySum(arr, num) {
  let max = 0;
  let temp = 0;
  if (arr.length == 0 || arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    temp += arr[i];
  }
  max = temp;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}
