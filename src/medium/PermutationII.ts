function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }
  let ans: number[][] = [];

  let map = new Map<number, number>();
  for (const num of nums) {
    const key = map.get(num) || 0;
    map.set(num, key + 1);
  }

  function backtrack(curr: number[], map: Map<number, number>) {
    if (curr.length === nums.length) {
      ans.push(curr);
      return;
    }

    for (const [key, value] of map) {
      if (value === 0) {
        continue;
      }
      map.set(key, value - 1);
      backtrack([...curr, key], map);
      map.set(key, value);
    }
  }

  backtrack([], map);
  return ans;
}
