function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 0) {
    return Math.max(...triangle[0]);
  }
  const height = triangle.length;
  for (let i = 1; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}
