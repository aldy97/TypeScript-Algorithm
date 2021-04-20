// Insights: dp
// Time: O(T * n), where T is the target, n is nums.length
// Space: O(T)
function combinationSum4(nums: number[], target: number): number {
  // dp init: dp[0] is set to be 1 so that dp[1] could be 1 when you have 1 in nums
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  // i is sub-target
  for (let i = 1; i < target + 1; i++) {
    for (const n of nums) {
      if (i - n >= 0) {
        dp[i] += dp[i - n];
      }
    }
  }

  return dp[target];
}
