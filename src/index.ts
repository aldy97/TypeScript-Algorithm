function numIslands(grid: string[][]) {
  let count = 0;
  const n = grid.length;
  if (n === 0) return 0;
  const m = grid[0].length;

  function DFSMarking(x: number, y: number) {
    if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] !== '1') {
      return;
    }
    grid[x][y] = '0';
    DFSMarking(x - 1, y);
    DFSMarking(x, y - 1);
    DFSMarking(x + 1, y);
    DFSMarking(x, y + 1);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        DFSMarking(i, j);
        count++;
      }
    }
  }
  return count;
}

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
