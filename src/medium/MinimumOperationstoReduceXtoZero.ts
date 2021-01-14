// Sliding window
// Time: O(n)
// Space: O(1)
function minOperations(nums: number[], x: number): number {
  let left = 0;
  let n = nums.length;
  let currSum = nums.reduce((a, b) => a + b);
  let min = Infinity;

  for (let right = 0; right < n; right++) {
    currSum -= nums[right];

    while (currSum < x && left <= right) {
      currSum += nums[left];
      left++;
    }

    if (currSum === x) {
      min = Math.min(min, n - 1 - right + left);
    }
  }

  return min === Infinity ? -1 : min;
}
