//Space complexity: O(mn) in worst case in which every single ele is 0 in the matrix
function setZeroes(matrix: number[][]): void {
  const height = matrix.length;
  const length = matrix[0].length;
  const zeros: [number, number][] = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
  for (let pair of zeros) {
    const yCor = pair[0];
    const xCor = pair[1];
    for (let i = 0; i < height; i++) {
      matrix[i][xCor] = 0;
    }
    for (let i = 0; i < length; i++) {
      matrix[yCor][i] = 0;
    }
  }
}
