//Bubble sort
function bubbleSort(arr) {
  let isSwaped = true;
  var i = arr.length - 1;
  while (i >= 0 && isSwaped == true) {
    isSwaped = false;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwaped = true;
      }
    }
    i--;
  }

  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(bubbleSort([9, 4, 7, 2, 8, 10, 55, 100, 54, 65, 23, 54, 1]));
