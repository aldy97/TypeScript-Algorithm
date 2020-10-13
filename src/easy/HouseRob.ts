//O(n) for both time and space complexity
function rob(nums: number[]): number {
  const size = nums.length;

  //base cases:
  if (size === 1) {
    return nums[0];
  } else if (size === 0) {
    return 0;
  }

  //init dp table
  let dp: number[] = new Array(size).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < size; i++) {
    //dp[1] is decided by choosing whether to rob the first or the second
    if (i === 1) {
      dp[i] = Math.max(dp[i - 1], nums[i]);
    } //the rest is determined by choose to rob the current or not
    else {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
  }

  return dp[size - 1];
}
