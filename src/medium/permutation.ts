function permute(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }
  let res: number[][] = [];

  function backtrack(curr: number[]): void {
    if (curr.length === nums.length) {
      res.push(curr);
      return;
    } else {
      const used = new Set(curr);
      for (const num of nums) {
        if (!used.has(num)) {
          backtrack([...curr, num]);
        }
      }
    }
  }
  backtrack([]);
  return res;
}
