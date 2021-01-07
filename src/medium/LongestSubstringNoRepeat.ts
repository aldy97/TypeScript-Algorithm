// Sliding window + set
// Time: O(2n) = O(n), two-pass in worst case
// Space: O(n), in worst case every char is unique
function lengthOfLongestSubstring1(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let max = 1;
  let i = 0,
    j = 0;
  let set = new Set<string>();
  while (j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      max = Math.max(max, set.size);
      j++;
    } else {
      set.delete(s[i]);
      i++;
    }
  }

  return max;
}

// Optimized sliding window with hashmap
// Time: Theta(n) strictly, one-pass
// Space: O(n)
// We don't need to increase i little by little.
function lengthOfLongestSubstring2(s: string): number {
  const len = s.length;
  let max = 0;
  let map = new Map<string, number>();

  for (let i = 0, j = 0; j < len; j++) {
    if (map.get(s[j])) {
      i = Math.max(i, map.get(s[j]) as number);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j + 1);
  }

  return max;
}
