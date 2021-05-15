// BFS: TLE solution
function minKnightMovesBFS(x: number, y: number): number {
  const dir = [
    [-2, -1],
    [-2, +1],
    [-1, -2],
    [+1, -2],
    [+2, -1],
    [+2, +1],
    [-1, +2],
    [+1, +2],
  ];

  let queue: [number, number][] = [[0, 0]];
  let steps: number = 0;
  let visited = new Set<[number, number]>();
  while (queue) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [currX, currY] = queue.shift() as [number, number];
      if (currX === x && currY === y) {
        return steps;
      }
      for (const [x, y] of dir) {
        const newPos: [number, number] = [currX + x, currY + y];
        if (!visited.has(newPos)) {
          queue.push(newPos);
        }
      }
    }
    steps++;
  }

  return -1;
}

// Insights 1: any immediate neighbors with x + y = 2 taks exactly two steps to reach
// Insights 2: start from the target and try to go to orogin, we would only need to look at two left-down direction, (-1, -2) and (-2, -1)
// Time: O(x * y)
// Space: O(x * y)
function minKnightMoves(x: number, y: number): number {
  const map = new Map<string, number>();

  const dfs = (x: number, y: number): number => {
    const key = x + "," + y;
    if (map.get(key) !== undefined) return map.get(key) as number;
    // the only case: x === 0 and y === 0, thus having reached origin
    if (x + y === 0) {
      return 0;
    } else if (x + y === 2) {
      return 2;
    } else {
      const ret =
        Math.min(
          dfs(Math.abs(x - 1), Math.abs(y - 2)),
          dfs(Math.abs(x - 2), Math.abs(y - 1))
        ) + 1;
      map.set(key, ret);
      return ret;
    }
  };

  return dfs(Math.abs(x), Math.abs(y));
}
