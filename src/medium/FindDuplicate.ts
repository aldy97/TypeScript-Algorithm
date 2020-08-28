function findDuplicate(nums: number[]): number {
  const sortedNums = nums.sort();
  let i = 0;
  let j = 1;
  while (sortedNums[i] !== sortedNums[j]) {
    i++;
    j++;
  }
  return sortedNums[i];
}

console.log(findDuplicate([1, 3, 4, 4, 2]));
