function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  const numsSet = new Set<number>(nums);
  let longest = 0;
  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let curr = num;
      let currStreak = 1;
      //the while loop will only interate n times in total, so the overall time complexity is still O(n)
      while (numsSet.has(curr + 1)) {
        curr++;
        currStreak++;
      }
      longest = Math.max(longest, currStreak);
    }
  }
  return longest;
}
