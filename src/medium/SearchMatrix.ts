// Insights: Search from top right corner
// Time complexity: O(m + n)
// Space complexity: O(1)
function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] > target) {
      col--;
    }
  }

  return false;
}
