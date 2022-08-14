//Merge Sort - Recursion

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}

function mergeArr(arr1, arr2) {
  let retarr = [];
  let j = 0;
  let i = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      retarr.push(arr2[j]);
      j++;
    } else {
      retarr.push(arr1[i]);
      i++;
    }
  }
  if (i == arr1.length && j != arr2.length) {
    retarr = retarr.concat(arr2.slice(j));
  } else if (j == arr2.length && i != arr1.length) {
    retarr = retarr.concat(arr1.slice(i));
  }
  return retarr;
}
console.log(mergeSort([2, 100, 88, 56, 61, 4, 44, 6, 56, 8, 10]));
