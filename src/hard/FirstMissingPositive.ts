function firstMissingPositive(nums: number[]): number {
  const numsSet = new Set(nums);
  for (let i = 1; i < Infinity; i++) {
    if (!numsSet.has(i)) {
      return i;
    }
  }
  return -1;
}
