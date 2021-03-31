// Insights: DFS + recursive
// Time Complexity: O(m * n), where m is number or row, and n is number of col
// Space Complexity: O(m * n)
function maxAreaOfIsland(grid: number[][]): number {
  if (grid.length === 0) return 0;

  let maxArea = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const getArea = (row: number, col: number): number => {
    // boundry check and value check
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    grid[row][col] = 0;

    return (
      1 +
      getArea(row, col - 1) +
      getArea(row, col + 1) +
      getArea(row - 1, col) +
      getArea(row + 1, col)
    );
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, getArea(i, j));
      }
    }
  }

  return maxArea;
}
