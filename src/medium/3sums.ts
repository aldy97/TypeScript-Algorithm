function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];
  if (nums.length < 3) return results;
  nums = nums.sort((a, b) => a - b);
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // remember: nums has been sorted
    if (nums[i] > target) break;
    // skip all duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        // avoids duplicate answers
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}
