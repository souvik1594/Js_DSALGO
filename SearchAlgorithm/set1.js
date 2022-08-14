//linear Search
function linearSearch(arr, search) {
  let index = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      index = i;
      break;
    }
  }
  return index;
}
