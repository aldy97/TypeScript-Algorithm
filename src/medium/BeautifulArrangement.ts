// Time: O(n)
// Space: O(n)
function constructArray(n: number, k: number): number[] {
  const res = new Array<number>(n);
  let left = 1;
  let right = n;
  for (let i = 0; i < n; i++) {
    res[i] = k % 2 === 0 ? left++ : right--;
    if (k > 1) k--;
  }

  return res;
}
