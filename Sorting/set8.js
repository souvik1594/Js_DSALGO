//Quick Sort

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotPoint = pivotCheck(arr, left, right);
    //left
    quickSort(arr, left, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, right);
  }
  return arr;
}

function pivotCheck(arr, start = 0, end = arr.length - 1) {
  let swapIdx = start;
  for (let i = swapIdx + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
console.log(quickSort([2, 100, 88, 56, 61, 4, 44, 6, 1, 8, 10]));
