function subsetsWithDup(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }

  const n = nums.length;
  let result: number[][] = [];
  nums.sort();

  function backtrack(buffer: number[], curr: number) {
    result.push(buffer);
    for (let i = curr; i < n; i++) {
      buffer.push(nums[i]);
      backtrack(buffer, i + 1);
      buffer.pop();
    }
  }

  backtrack([], 0);
  return result;
}
