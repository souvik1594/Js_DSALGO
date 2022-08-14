function binarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < arr.length && right > 0) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === search) {
      return mid;
    } else if (arr[mid] < search) {
      left = mid + 1;
    } else if (arr[mid] > search) {
      right = mid - 1;
    }
  }
  if (arr[mid] === search) {
    return mid;
  }
  return -1;
}
//1,2,3,4,5,6,7,8,9  2
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 1));
