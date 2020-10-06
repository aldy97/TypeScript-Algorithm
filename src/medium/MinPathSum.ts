//O(m*n), in which m and n are row and col respectively
function minPathSum(grid: number[][]): number {
  if (grid.length === 0) {
    return -1;
  }
  let dp: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    dp.push(new Array(grid[0].length).fill(0));
  }
  //initialize str pt
  dp[0][0] = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      } // 1st row
      else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } //1st col
      else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } //not in the first row or in the first col
      else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
}
