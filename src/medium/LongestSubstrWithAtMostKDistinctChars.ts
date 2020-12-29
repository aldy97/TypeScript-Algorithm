// Sliding window + Hasmap
// Time: O(nk) in worst case and O(n) in best case
// Space: O(n)
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (!s || k === 0) return 0;
  let p1 = 0;
  let p2 = 0;
  let maxLen = 0;
  let map = new Map<string, number>();

  while (p2 < s.length) {
    // update map when p2 advances
    const value = map.get(s[p2]) || 0;
    map.set(s[p2], value + 1);

    // update max_length if distinct chars in the sliding window <= k
    if (map.size <= k) {
      maxLen = Math.max(maxLen, p2 - p1 + 1);
    }

    // advance p1 until we have k distinct chars in the sliding window
    while (map.size === k + 1) {
      const value = map.get(s[p1]);
      if (value === 1) {
        map.delete(s[p1]);
      } else {
        map.set(s[p1], (value as number) - 1);
      }
      p1++;
    }

    p2++;
  }

  return maxLen;
}
