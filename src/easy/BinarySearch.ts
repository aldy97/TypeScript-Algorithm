function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    if (nums[pivot] === target) return pivot;
    if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
}
