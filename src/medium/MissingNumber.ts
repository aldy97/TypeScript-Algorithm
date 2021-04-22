// Insights: make sure the arr is in increasing order first
// Time: O(n)
// Space: O(1)
function missingNumber(arr: number[]): number {
  if (arr[1] < arr[0]) {
    arr = arr.reverse();
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const d1 = arr[i] - arr[i - 1];
    const d2 = arr[i + 1] - arr[i];
    if (d1 < d2) {
      return arr[i] + d1;
    } else if (d2 < d1) {
      return arr[i - 1] + d2;
    }
  }
  // when the arr is like [0,0,0,0]
  return arr[0];
}
