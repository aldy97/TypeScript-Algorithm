function rob(nums: number[]): number {
  const size = nums.length;
  if (size === 1) {
    return nums[0];
  }
  let dp: number[] = new Array(size).fill(0);
  //init dp table
  dp[0] = nums[0];
  for (let i = 1; i < size; i++) {
    if (i === 1) {
      dp[i] = Math.max(dp[i - 1], nums[i]);
    } else {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
  }
  return dp[size - 1];
}
