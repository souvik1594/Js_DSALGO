function pivotCheck(arr, start = 0, end = arr.length) {
  let swapIdx = start;
  for (let i = swapIdx + 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  console.log(arr);
  return swapIdx;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(pivotCheck([2, 100, 88, 56, 61, 4, 44, 6, 1, 8, 10]));
