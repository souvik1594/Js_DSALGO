function isPalindrome(str) {
  function reverse(str1) {
    if (str1.length === 1) {
      return str1;
    }
    return str1[str1.length - 1].concat(
      reverse(str1.slice(0, str1.length - 1))
    );
  }
  return str === reverse(str);
}
