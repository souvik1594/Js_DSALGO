function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) return false;

  while (start < end) {
    if ((arr[start] + arr[end]) / 2 == avg) {
      return true;
    } else if ((arr[start] + arr[end]) / 2 < avg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
