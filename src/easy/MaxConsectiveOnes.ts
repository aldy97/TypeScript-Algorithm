function findMaxConsecutiveOnes(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let curr = 0;
  let max = 0;
  let pt = 0;
  while (pt < nums.length) {
    if (nums[pt] === 1) {
      curr++;
    } else {
      max = curr > max ? curr : max;
      curr = 0;
    }
    pt++;
  }
  max = curr > max ? curr : max;
  return max;
}
