function collectStrings(obj) {
  let newObj = [];
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      newObj = newObj.concat(collectStrings(obj[i]));
    } else if (typeof obj[i] === "string") {
      newObj.push(obj[i]);
    }
  }
  return newObj;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
