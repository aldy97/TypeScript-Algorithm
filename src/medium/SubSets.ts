function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  helper([], 0);

  function helper(current: number[], index: number): void {
    result.push(current);
    for (let i = index; i < nums.length; i++) {
      helper(current.concat(nums[i]), i + 1);
    }
  }

  return result;
}
