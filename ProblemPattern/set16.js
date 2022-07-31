function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = new Map();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      start = Math.max(start, seen.get(str[i]));
    }
    longest = Math.max(longest, i - start + 1);
    seen.set(str[i], i + 1);
  }
  return longest;
}

console.log(findLongestSubstring("thecatinthehat"));
