// Insights: group consecutive 0s and 1s in given s
// Time: O(n)
// Space: O(n)
function countBinarySubstrings(s: string): number {
  const groups: number[] = [];
  let t = 0;
  groups[t] = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      groups[++t] = 1;
    } else {
      groups[t]++;
    }
  }

  let ans = 0;
  for (let i = 0; i < groups.length - 1; i++) {
    ans += Math.min(groups[i], groups[i + 1]);
  }

  return ans;
}
