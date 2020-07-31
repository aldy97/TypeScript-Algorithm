//双指针
function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let set: string[] = [];
  let ans = 0,
    i = 0,
    j = 0;
  while (i < n && j < n) {
    if (!set.includes(s.charAt(j))) {
      set.push(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      set.filter((str) => str !== s.charAt(i++));
    }
  }
  return ans;
}
