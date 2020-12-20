function findCircleNum(M: number[][]): number {
  if (M.length === 0) {
    return 0;
  }

  const rowM = M.length;
  const colM = M[0].length;
  let ans = 0;

  const backtrack = (M: number[][], row: number, col: number) => {
    if (row >= 0 && row < rowM && col >= 0 && col < colM && M[row][col] === 1) {
      M[row][col] === 0;
      backtrack(M, row - 1, col);
      backtrack(M, row + 1, col);
      backtrack(M, row, col - 1);
      backtrack(M, row, col + 1);
      ans++;
    }
  };

  for (let i = 0; i < rowM; i++) {
    for (let j = 0; j < colM; j++) {
      if (M[i][j] === 1) {
        backtrack(M, i, j);
      }
    }
  }

  return ans;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
