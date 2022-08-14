//Selection Sort

function selectionSort(arr) {
  let minIndex;
  for (var i = 0; i < arr.length; i++) {
    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(selectionSort([9, 4, 7, 2, 8, 10, 55, 100, 54, 65, 23, 54, 1]));
