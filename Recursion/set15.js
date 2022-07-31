function stringifyNumbers(obj) {
  let newObj = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      newObj[i] = stringifyNumbers(obj[i]);
    } else if (typeof obj[i] === "number") {
      newObj[i] = obj[i].toString();
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}
