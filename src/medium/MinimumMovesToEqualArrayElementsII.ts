// Time: O(n * logn)
// Space: O(1), no extra space allocated
function minMoves2(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums = nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];

  return nums
    .filter((n) => n !== median)
    .reduce((acc, curr) => acc + Math.abs(curr - median), 0);
}
