function twoSum(nums: number[], target: number): number[][] {
  let res: number[][] = [];
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      res.push([nums[i], nums[j], -target]);
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  const sortedNums = nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const subRes = twoSum(sortedNums.slice(i + 1), 0 - sortedNums[i]);
    if (subRes.length !== 0) {
      res.push(...subRes);
    }
    while (i < nums.length - 2 && nums[i] == nums[i + 1]) {
      i++;
    }
  }
  return res;
}
