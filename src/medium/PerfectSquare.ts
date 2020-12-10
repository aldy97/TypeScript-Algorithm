function numSquares(n: number): number {
  if (n === 0) {
    return 0;
  }

  // the length of dp is n + 1, and dp[0] = 0
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < Infinity; j++) {
      if (j * j > i) {
        break;
      } else {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  }

  return dp[n];
}
