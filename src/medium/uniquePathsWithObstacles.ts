function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (!obstacleGrid) {
    return 1;
  }
  //if the starting point is blocked, then no solution
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  //if there is one row, return 0 when there is a block in the path; return 1 if there is no block in the path
  if (obstacleGrid.length === 1) {
    for (let i = 0; i < obstacleGrid[0].length; i++) {
      if (obstacleGrid[0][i] === 1) {
        return 0;
      }
    }
    return 1;
  }

  //dynamic table initialization
  const height = obstacleGrid.length;
  const width = obstacleGrid[0].length;
  let dp = [];
  for (let i = 0; i < height; i++) {
    const array = new Array(width).fill(0);
    dp.push(array);
  }
  dp[0][0] = 1;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] === 1 ? 1 : 0;
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] === 1 ? 1 : 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[height - 1][width - 1];
}
