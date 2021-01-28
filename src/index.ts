function minimumEffortPath(heights: number[][]): number {
  let minEfforts = Infinity;
  const height = heights.length;
  const width = heights[0].length;

  function backtrack(
    row: number,
    col: number,
    prevHeight: number,
    maxEfforts: number,
    visited: number[][]
  ): void {
    // checks if reaches bottom-right:
    if (row === height - 1 && col === width - 1) {
      minEfforts = Math.min(minEfforts, maxEfforts);
    }
    // boundary && visited check:
    if (row < 0 || row === height || col < 0 || col === width || visited[row][col] === -1) {
      return;
    } else {
      const temp = visited[row][col];
      const currHeight = heights[row][col];
      const currEfforts = Math.abs(currHeight - prevHeight);
      maxEfforts = Math.max(maxEfforts, currEfforts);
      console.log("maxEfforts:", maxEfforts);
      console.log([row, col]);
      visited[row][col] = -1;
      backtrack(row + 1, col, temp, maxEfforts, visited);
      backtrack(row - 1, col, temp, maxEfforts, visited);
      backtrack(row, col + 1, temp, maxEfforts, visited);
      backtrack(row, col - 1, temp, maxEfforts, visited);
      visited[row][col] = temp;
    }
  }

  backtrack(0, 0, heights[0][0], 0, [...heights]);

  return minEfforts;
}

console.log(
  minimumEffortPath([
    [1, 1],
    [2, 2],
  ])
);
