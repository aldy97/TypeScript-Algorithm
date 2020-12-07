function getMaximumGold(grid: number[][]): number {
  if (grid.length === 0) {
    return 0;
  }
  const height = grid.length;
  const width = grid[0].length;
  let res = 0;

  function backtrack(
    currGold: number,
    currGrid: number[][],
    x: number,
    y: number
  ): void {
    // boundary check
    if (x < 0 || x >= height || y < 0 || y >= width) {
      res = currGold > res ? currGold : res;
      return;
    }
    if (grid[x][y] !== 0) {
      currGold += grid[x][y];
      const temp = currGrid[x][y];
      currGrid[x][y] = 0;
      backtrack(currGold, currGrid, x + 1, y);
      backtrack(currGold, currGrid, x - 1, y);
      backtrack(currGold, currGrid, x, y + 1);
      backtrack(currGold, currGrid, x, y - 1);
      currGrid[x][y] = temp;
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] !== 0) {
        backtrack(0, grid, i, j);
      }
    }
  }

  return res;
}
