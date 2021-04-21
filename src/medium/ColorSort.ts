// Inights: two-ptrs, where p0 is the right boundary of 0s, and p1 is the left boundary of 1s
// Time: O(n)
// Space: O(1)
function sortColors(nums: number[]): void {
  let p0 = 0;
  let p1 = nums.length - 1;
  let curr = 0;

  while (curr <= p1) {
    if (nums[curr] === 0) {
      const temp = nums[curr];
      nums[curr++] = nums[p0];
      nums[p0++] = temp;
    } else if (nums[curr] === 2) {
      const temp = nums[curr];
      nums[curr++] = nums[p1];
      nums[p1--] = temp;
    } else {
      curr++;
    }
  }
}
