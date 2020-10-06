/**
 Do not return anything, modify matrix in-place instead.
 */
function rotateMatrix(matrix: number[][]): void {
  let s = 0;
  let e = matrix.length - 1;
  //swap rows
  while (s < e) {
    const temp = matrix[s];
    matrix[s] = matrix[e];
    matrix[e] = temp;
    s++;
    e--;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}
