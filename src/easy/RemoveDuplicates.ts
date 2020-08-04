/**
 * 因为已知nums是一个sortedArray，那么我们就可以直接使用快慢双指针
 * 不仅需要返回没有dupicate的array的长度
 * 同时也需要对nums进行改动，参见line 12
 */
function removeDuplicates(nums: number[]): number {
  let i = 0;
  if (nums === null) return 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
