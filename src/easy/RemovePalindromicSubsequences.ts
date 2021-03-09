// insights: since it contains only "a"s and "b"s, it takes up to two stpes if s is not palindrome as a whole.
// Time: O(n)
// Space: O(1)
function removePalindromeSub(s: string): number {
  if (!s) return 0;
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 <= p2) {
    if (s[p1] === s[p2]) {
      p1++;
      p2--;
    } else {
      return 2;
    }
  }

  return 1;
}
