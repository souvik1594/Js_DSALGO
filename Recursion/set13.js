function nestedEvenSum(obj) {
  let sum = 0;
  if (!obj || obj === null) return 0;
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      sum += nestedEvenSum(obj[i]);
    } else if (typeof obj[i] === "number" && obj[i] % 2 === 0) {
      sum = sum + obj[i];
    }
  }
  return sum;
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj2));
