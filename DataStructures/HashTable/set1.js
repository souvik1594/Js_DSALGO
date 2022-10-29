//Hash Functions
function hash(key, arrLen) {
  var total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLen;
  }
  return total;
}

console.log(hash("pink", 10));
