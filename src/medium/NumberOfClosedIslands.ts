// Insights: remove boundary islands first, which are not really islands
// Time: O(m * n), where m is rows and n is cols
// Space: O(m * n)
function closedIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    if (grid[i][0] === 0) dfs(i, 0, grid);
    if (grid[i][cols - 1] === 0) dfs(i, cols - 1, grid);
  }

  for (let j = 0; j < cols; j++) {
    if (grid[0][j] === 0) dfs(0, j, grid);
    if (grid[rows - 1][j] === 0) dfs(rows - 1, j, grid);
  }

  let ans = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        dfs(i, j, grid);
        ans++;
      }
    }
  }

  return ans;
}

const dfs = (row: number, col: number, grid: number[][]): void => {
  const rows = grid.length;
  const cols = grid[0].length;
  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= cols ||
    grid[row][col] !== 0
  ) {
    return;
  }

  grid[row][col] = -1;
  dfs(row + 1, col, grid);
  dfs(row - 1, col, grid);
  dfs(row, col + 1, grid);
  dfs(row, col - 1, grid);
};
