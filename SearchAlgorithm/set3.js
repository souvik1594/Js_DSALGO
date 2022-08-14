function searchString(str, find) {
  let count = 0;
  let matcher;
  if (str.length < find.length) return 0;
  if (str === find) return 1;

  for (var i = 0; i < str.length; i++) {
    matcher = "";
    if (str[i] === find[0]) {
      matcher = matcher.concat(str[i]);
      for (let j = 1; j < find.length; j++) {
        if (find[j] === str[j + i]) {
          matcher = matcher.concat(str[j + i]);
        }
      }

      if (matcher === find) {
        count++;
      }
    }
  }
  return count;
}

console.log(searchString("lorielol at lol", "lol"));
