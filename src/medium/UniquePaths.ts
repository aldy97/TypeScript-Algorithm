function uniquePaths(m: number, n: number): number {
  const dp = new Array(m + 1).fill(0);
  console.log(dp);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(1);
  }
  console.log(dp);

  dp[m][n] = 1;
  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }

  return dp[1][1];
}

console.log(uniquePaths(3, 2));
