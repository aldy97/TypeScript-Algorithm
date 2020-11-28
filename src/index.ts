// product of the array except for itself is the product of all ele to the left and all ele to the right
function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  let res: number[] = [];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    left[i] = i === 0 ? 1 : left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = i === nums.length - 1 ? 1 : right[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
}
