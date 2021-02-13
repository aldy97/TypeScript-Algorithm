function shortestPathBinaryMatrix2(grid: number[][]): number {
  let steps = 1;
  let queue: number[][] = [[0, 0]];
  const directions: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [1, 0],
    [-1, 1],
    [-1, -1],
    [-1, 0],
  ];

  // helper
  function _withinBound(x: number, y: number) {
    return 0 <= x && 0 <= y && x < grid.length && y < grid[0].length;
  }

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [row, col] = queue.shift() as number[];
      // checks whether its at bottom-right
      if (row === grid.length - 1 && col === grid[0].length - 1) {
        return steps;
      }
      for (const [dx, dy] of directions) {
        const newX = row + dx,
          newY = col + dy;
        if (_withinBound(newX, newY) && grid[newX][newY] === 0) {
          grid[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      }
    }
    steps++;
  }

  return -1;
}
