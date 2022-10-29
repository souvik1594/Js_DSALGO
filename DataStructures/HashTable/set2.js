//Hash Functions - Improving
function hash(key, arrLen) {
  var total = 0;
  var weiredPrime = 13;
  for (var i = 0; i < Math.min(key.length, 100); i++) {
    let value = key.charCodeAt(i) - 96;
    total = (total * weiredPrime + value) % arrLen;
  }
  return total;
}

console.log(hash("pink", 10));
