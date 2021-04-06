// Time: O(n * logn)
// Space: O(1)
function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  nums.sort();

  let min = Infinity;
  for (let i = 0; i < 4; i++) {
    let diff = nums[nums.length - 4 + i] - nums[i];
    min = Math.min(min, diff);
  }

  return min;
}
