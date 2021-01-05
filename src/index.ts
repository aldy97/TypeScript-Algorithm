function pacificAtlantic(matrix: number[][]): number[][] {
  if (matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  let ans: number[][] = [];
  let visited: [number, number][] = [];

  function isBoundOk(row: number, col: number): boolean {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  function reachA(row: number, col: number, prevVal: number) {
    // bound check
    if (!isBoundOk(row, col)) {
      return false;
    }
    // if visited
    if (visited.includes([row, col])) {
      return false;
    }
    const currVal = matrix[row][col];
    // if reachable
    if (prevVal < currVal) {
      return false;
    }
    // reached Atlantic
    if (row === rows - 1 || col === cols - 1) {
      return true;
    }
    visited.push([row, col]);
    if (
      reachA(row - 1, col, currVal) ||
      reachA(row + 1, col, currVal) ||
      reachA(row, col - 1, currVal) ||
      reachA(row, col + 1, currVal)
    ) {
      visited = [];
      return true;
    }
    visited = [];
    return false;
  }

  function reachP(row: number, col: number, prevVal: number) {
    // bound check
    if (!isBoundOk(row, col)) {
      return false;
    }
    // if visited
    if (visited.includes([row, col])) {
      return false;
    }
    const currVal = matrix[row][col];
    // if reachable
    if (prevVal < currVal) {
      return false;
    }
    // reached Atlantic
    if (row === 0 || col === 0) {
      return true;
    }
    visited.push([row, col]);
    if (
      reachA(row - 1, col, currVal) ||
      reachA(row + 1, col, currVal) ||
      reachA(row, col - 1, currVal) ||
      reachA(row, col + 1, currVal)
    ) {
      visited = [];
      return true;
    }
    visited = [];
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (reachA(i, j, matrix[i][j]) && reachP(i, j, matrix[i][j])) {
        ans.push([i, j]);
      }
    }
  }

  return ans;
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
