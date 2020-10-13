function maxProduct(nums: number[]): number {
  type Tuple = {
    max: number;
    min: number;
  };
  let currMax = nums[0];
  if (nums.length === 1) {
    return nums[0];
  }
  let dp: Tuple = { max: nums[0], min: nums[0] };
  for (let i = 1; i < nums.length; i++) {
    const max = Math.max(nums[i] * dp.max, nums[i] * dp.min, nums[i]);
    const min = Math.min(nums[i] * dp.max, nums[i] * dp.min, nums[i]);
    dp.max = max;
    dp.min = min;
    console.log(dp);
    currMax = dp.max > currMax ? dp.max : currMax;
  }
  return currMax;
}

console.log(maxProduct([-4, -3, -2]));
