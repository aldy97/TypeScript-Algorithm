// Insights: greedy
// Time: O(n)
// Space: O(1)
function checkPossibility(nums: number[]): boolean {
  let numViolations = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (numViolations == 1) {
        return false;
      }
      numViolations++;

      if (i < 2 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }

  return true;
}
