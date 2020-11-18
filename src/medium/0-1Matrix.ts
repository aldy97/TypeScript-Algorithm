function updateMatrix(matrix: number[][]): number[][] {
  const rowLen = matrix.length,
    colLen = matrix[0].length;
  const dist = new Array(rowLen)
    .fill([])
    .map(() => new Array(colLen).fill(Infinity));
  const getDist = (row: number, col: number, [rd, cd]: any) =>
    Math.min(dist[row][col], dist[row + rd][col + cd] + 1);
  // top, left, down, right
  const dir = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  // check left & top
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (!matrix[i][j]) dist[i][j] = 0;
      else {
        if (!i && !j) continue;
        if (i > 0 && j > 0) {
          dist[i][j] = Math.min(getDist(i, j, dir[0]), getDist(i, j, dir[1]));
        } else {
          dist[i][j] = i ? getDist(i, j, dir[1]) : getDist(i, j, dir[0]);
        }
      }
    }
  }
  // check right & bottom
  for (let i = rowLen - 1; i >= 0; i--) {
    for (let j = colLen - 1; j >= 0; j--) {
      if (matrix[i][j]) {
        if (i === rowLen - 1 && j === colLen - 1) continue;
        if (i < rowLen - 1 && j < colLen - 1) {
          dist[i][j] = Math.min(getDist(i, j, dir[2]), getDist(i, j, dir[3]));
        } else {
          dist[i][j] =
            i < rowLen - 1 ? getDist(i, j, dir[3]) : getDist(i, j, dir[2]);
        }
      }
    }
  }
  return dist;
}
