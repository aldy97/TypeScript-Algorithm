function singleNumber(nums: number[]): number {
  let total = 0;
  let curr = 0;
  let set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) {
      continue;
    } else {
      set.add(num);
      total += num * 2;
    }
  }
  for (let num of nums) {
    curr += num;
  }
  return total - curr;
}
