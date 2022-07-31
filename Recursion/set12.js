function capitalizeFirst(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }

  let str = arr[0];
  str = str[0].toUpperCase().concat(str.slice(1, str.length));
  newArr.push(str);

  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
