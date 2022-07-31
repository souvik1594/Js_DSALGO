function areThereDuplicates(a, b, c, d) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates([1, 2, 2, 3, 4, 5, 6]));
