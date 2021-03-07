// Time: O(n)
// Space: O(1)
function maxChunksToSorted(arr: number[]): number {
  let ans = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) ans++;
  }

  return ans;
}
