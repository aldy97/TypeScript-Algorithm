// Time: O(n * m), where n is num of numbers in one arr, m is number of arrs in mat
// Space: O(m)
function smallestCommonElement(mat: number[][]): number {
  if (mat.length === 0) return -1;
  let map = new Map<number, number>();
  for (const arr of mat) {
    for (const n of arr) {
      const count = map.get(n) || 0;
      map.set(n, count + 1);
    }
  }

  let res = Infinity;
  for (const [k, v] of map) {
    if (v === mat.length) {
      res = Math.min(res, k);
    }
  }

  return res === Infinity ? -1 : res;
}
