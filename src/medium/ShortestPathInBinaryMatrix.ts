// BFS
// Time and Space complexity: O(n)
function shortestPathBinaryMatrix(grid: number[][]) {
  const m = grid.length || 0;
  const n = (m && grid[0].length) || 0;

  if (m === 0 || n === 0 || grid[0][0] !== 0) return -1;

  let steps = 1;
  const queue = [[0, 0]];
  const dires = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
    [1, -1],
  ];

  // helper
  function _withinBound(x: number, y: number) {
    return 0 <= x && 0 <= y && x < m && y < n;
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift() as number[];

      if (x === m - 1 && y === n - 1) return steps;

      for (const [dx, dy] of dires) {
        const newX = x + dx,
          newY = y + dy;
        if (_withinBound(newX, newY) && grid[newX][newY] === 0) {
          grid[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      }
    }
    steps += 1;
  }

  return -1;
}
