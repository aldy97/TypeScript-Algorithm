// Time: O(n^2), where n is number of rows
// Space: O(1), changes are made directly on give input
function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 0) {
    return Math.max(...triangle[0]);
  }
  const height = triangle.length;
  for (let i = 1; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}

// Insights: top-down dp table
// Time: O(n^2), where n is number of rows
// Space: O(n^2)
function minimumTotalDP(triangle: number[][]): number {
  let dp: number[][] = [];
  dp.push([triangle[0][0]]);

  for (let i = 1; i < triangle.length; i++) {
    const sub: number[] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        sub.push(triangle[i][j] + dp[i - 1][j]);
      } else if (j === triangle[i].length - 1) {
        sub.push(triangle[i][j] + dp[i - 1][j - 1]);
      } else {
        sub.push(triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]));
      }
    }
    dp.push(sub);
  }

  return Math.min(...dp[triangle.length - 1]);
}
