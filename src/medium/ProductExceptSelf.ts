// product of the array except for itself is the product of all ele to the left and all ele to the right
// Time and space: O(n)
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

// two pass, in the first pass get product to the left of index i, in the second get product to the right of index i
// Time: O(n), Space: O(1)
function productExceptSelfWithConstantSpace(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  // there is nothing to the left when i = 1
  let result: number[] = [1];
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }
  // there is nothing to the right when i = nums.length -1;
  let R = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= R;
    R *= nums[i];
  }
  return result;
}
