function countBits(num: number): number[] {
  if (num === 0) {
    return [0];
  }
  let dp: number[] = [0];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = 1 + dp[i - 1];
    }
  }
  return dp;
}
