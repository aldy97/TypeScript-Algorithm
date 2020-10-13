/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (!nums) {
    return;
  }
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}

console.log(moveZeroes([0, 0, 1]));
