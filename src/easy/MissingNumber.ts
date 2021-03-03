// Insights: Gaussian's formula
// Time: O(n)
// Space: O(1)
function missingNumber(nums: number[]): number {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }

  const total = (n * (n + 1)) / 2;

  return total - sum;
}
