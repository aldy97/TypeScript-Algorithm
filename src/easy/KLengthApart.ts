// Time: O(n)
// Space: O(1)
function kLengthApart(nums: number[], k: number): boolean {
  let indexOfLastOne: number = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - indexOfLastOne - 1 < k) {
        return false;
      } else {
        indexOfLastOne = i;
      }
    }
  }

  return true;
}
