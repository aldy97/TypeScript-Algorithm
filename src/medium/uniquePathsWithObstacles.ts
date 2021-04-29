// Insights: dp
// Time: O(m * n), where m is rows and n is cols
// Space: O(m * n)
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // base case:
  if (obstacleGrid[0][0] === 1) return 0;

  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  // init dp table:
  let dp: number[][] = [];
  for (let i = 0; i < rows; i++) {
    dp.push(new Array(cols).fill(0));
  }
  dp[0][0] = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0 && obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0 && obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rows - 1][cols - 1];
}
