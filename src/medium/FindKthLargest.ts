function findKthLargest(nums: number[], k: number): number {
  if (nums.length < k) return -1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < k - 1; i++) {
    nums.pop();
  }
  return nums[nums.length - 1];
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
