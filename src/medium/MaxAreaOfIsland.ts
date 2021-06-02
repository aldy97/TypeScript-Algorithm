// Insights: DFS + recursive
// Time Complexity: O(m * n), where m is number or row, and n is number of col
// Space Complexity: O(m * n)
function maxAreaOfIsland(grid: number[][]): number {
  const dirs: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const row = grid.length;
  const col = grid[0].length;
  let max = 0;

  // helper
  const getArea = (x: number, y: number): number => {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
    grid[x][y] = 0;
    let area = 1;
    for (const [a, b] of dirs) {
      area += getArea(x + a, y + b);
    }
    return area;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, getArea(i, j));
      }
    }
  }
  return max;
}
