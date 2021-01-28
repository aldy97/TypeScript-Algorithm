// Time: O(n)
// Space: O(1)
function getSmallestString(n: number, k: number): string {
  const arr = Array(n).fill(1);
  k -= n;

  while (k) {
    arr[--n] += Math.min(k, 25);
    k -= Math.min(k, 25);
  }
  return arr.reduce((acc, cur) => acc + String.fromCharCode(cur + 96), "");
}
