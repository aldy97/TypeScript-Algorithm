function thirdMax(nums: number[]): number {
  const set = new Set(nums);
  if (set.size < 3) return Math.max(...nums);
  const firstMax = Math.max(...nums);
  const nums1 = nums.filter((a) => a !== firstMax);
  const secondMax = Math.max(...nums1);
  const nums2 = nums1.filter((a) => a !== secondMax);
  return Math.max(...nums2);
}

console.log(thirdMax([3, 2, 1]));
