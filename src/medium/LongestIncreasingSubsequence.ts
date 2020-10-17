function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let maxAns = 1;
  let dp: number[] = new Array(nums.length).fill(0);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let maxVal = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxVal = Math.max(maxVal, dp[j]);
      }
    }
    dp[i] = maxVal + 1;
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
}
