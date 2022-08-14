//Merging two arrays
function mergeArr(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
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

console.log(mergeArr([2, 4, 6, 8, 10], [1, 3, 5, 7, 8]));
