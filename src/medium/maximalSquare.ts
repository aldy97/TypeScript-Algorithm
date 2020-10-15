//when dp table is initialized, fill in the first row and first column with value in matrix accordingly
function maximalSquare(matrix: string[][]): number {
  //when matrix is empty
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  //only contains one row
  if (matrix.length === 1) {
    return matrix[0].includes('1') ? 1 : 0;
  }

  let max: number = 0;
  let dp: number[][] = [];
  const height = matrix.length;
  const width = matrix[0].length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === '1') {
        max = 1;
        break;
      }
    }
  }

  if (max === 0) return 0;

  //dp initialization
  for (let i = 0; i < height; i++) {
    dp.push(new Array(width).fill(0));
  }
  for (let i = 0; i < width; i++) {
    dp[0][i] = parseInt(matrix[0][i]);
  }
  for (let i = 0; i < height; i++) {
    dp[i][0] = parseInt(matrix[i][0]);
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (matrix[i][j] !== '0') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max ** 2;
}
