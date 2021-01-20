function minKnightMoves(x: number, y: number): number {
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
