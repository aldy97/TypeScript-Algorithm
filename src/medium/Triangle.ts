function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 0) {
    return Math.max(...triangle[0]);
  }
  const height = triangle.length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i !== 0 && j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (i !== 0 && j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else if (i !== 0) {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}
