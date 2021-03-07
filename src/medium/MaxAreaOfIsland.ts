// Insights: DFS
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
function maxAreaOfIsland(grid: number[][]) {
  const height = grid.length;
  const width = grid[0].length;
  let max = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1) {
        max = Math.max(max, dfs(row, col, grid));
      }
    }
  }

  return max;
}

// Helper function:
function dfs(r: number, c: number, grid: number[][]) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === 0
  ) {
    return 0;
  }

  const dirs: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let count = 1;
  grid[r][c] = 0;
  for (let dir of dirs) {
    count += dfs(r + dir[0], c + dir[1], grid);
  }

  return count;
}
