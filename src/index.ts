// Insight 1: for a binary number with k digits, there are 2^k combinations, let's call it combs
// Insight 2: Get a set of all substring of s and see if it's size is equal to combs
// Time: O(n)
// Space: O(n * k), where n is length of s
function hasAllCodes(s: string, k: number): boolean {
  const sub = new Set<string>();
  for (let i = 0; i <= s.length - k; i++) {
    sub.add(s.substr(i, k));
  }

  return sub.size === Math.pow(2, k);
}
