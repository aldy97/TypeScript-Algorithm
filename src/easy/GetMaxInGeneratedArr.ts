// DP
// Time and Space: O(n)
function getMaximumGenerated(n: number): number {
  // base case:
  if (n === 0) return 0;
  // init dp
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  let max = 0;

  for (let i = 0; i < n + 1; i++) {
    dp[i] = i % 2 === 0 ? dp[i / 2] : dp[(i - 1) / 2] + dp[1 + (i - 1) / 2];
    max = Math.max(max, dp[i]);
  }

  return max;
}
