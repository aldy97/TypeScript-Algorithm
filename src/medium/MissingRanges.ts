// Time and Space: O(n)
function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): string[] {
  let pointer = 0;
  let ans = [];
  let numSet = new Set(nums);
  for (let i = lower; i <= upper; i++) {
    if (!numSet.has(i) && nums[pointer] !== undefined) {
      ans.push([i, nums[pointer] - 1]);
      i = nums[pointer];
    } else if (!numSet.has(i)) {
      ans.push([i, upper]);
      break;
    }
    pointer++;
  }
  const res = ans.map((arr) =>
    arr.length === 2 && arr[0] !== arr[1] ? `${arr[0]}->${arr[1]}` : `${arr[0]}`
  );
  return res;
}
