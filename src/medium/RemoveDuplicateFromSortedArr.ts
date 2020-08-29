function removeDuplicates2(nums: number[]): number {
  if (nums.length < 3) return nums.length;
  let i = 0;
  let j = 2;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }
  console.log(nums);
  return nums.length;
}

console.log(removeDuplicates2([1, 1, 1, 2, 2, 3]));
