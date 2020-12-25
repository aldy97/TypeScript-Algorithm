// Time: O(n * m), Space: O(min(n, m))
// All ele on the same diagonal have the same sum of its x-index and y-index
function findDiagonalOrder(matrix: number[][]): number[] {
  // base case:
  if (matrix.length === 0) {
    return [];
  }

  const row = matrix.length;
  const col = matrix[0].length;

  let ans: number[] = [];
  let map = new Map<number, number[]>();

  // building a map to store sum and all ele that have the sum of x and y index
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const sum = i + j;
      let value = map.get(sum) || [];
      map.set(sum, [...value, matrix[i][j]]);
    }
  }

  // determines whether to add reverse of the arr into ans
  for (const [key, value] of map) {
    if (key % 2 === 0) {
      ans = [...ans, ...value.reverse()];
    } else {
      ans = [...ans, ...value];
    }
  }
  return ans;
}
