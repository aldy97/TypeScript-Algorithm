function subsetsWithDup(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }

  const n = nums.length;
  let result: number[][] = [];
  let buffer: number[] = [];
  nums.sort((a, b) => a - b);

  function backtrack(buffer: number[], curr: number) {
    result.push([...buffer]);
    for (let i = curr; i < n; i++) {
      if (i === curr || nums[i] !== nums[i - 1]) {
        buffer.push(nums[i]);
        backtrack(buffer, i + 1);
        buffer.pop();
      }
    }
  }

  backtrack(buffer, 0);
  return result;
}
