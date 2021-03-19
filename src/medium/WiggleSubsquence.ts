// Insights: greedy algorithm
// Time: O(n)
// Space: O(1)
function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  let diff: number | null = null;
  let len = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      len++;
    } else {
      const currDiff = nums[i] - nums[i - 1];
      if ((!diff && currDiff !== 0) || (diff && diff * currDiff < 0)) {
        diff = currDiff;
        len++;
      }
    }
  }

  return len;
}
