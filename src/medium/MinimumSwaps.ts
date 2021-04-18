// Insights: sliding window, find the max ones within the window with the size of ones in data
// Time: O(n)
// Space: O(1)
function minSwaps(data: number[]): number {
  const ones = data.filter((n) => n === 1).length;

  let left = 0;
  let right = ones - 1;
  let currMax = data.slice(left, right + 1).filter((n) => n === 1).length;
  let max = currMax;

  while (right < data.length) {
    if (data[left++] === 1) currMax--;
    if (data[++right] === 1) currMax++;
    max = Math.max(currMax, max);
  }

  return ones - max;
}
