function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
}
