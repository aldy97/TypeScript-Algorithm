// Time: O(n)
// Space: O(n)
function findErrorNums(nums: number[]): number[] {
  const set = new Set<number>();
  let dup = 0;

  // finding duplicate:
  for (const n of nums) {
    if (set.has(n)) {
      dup = n;
    } else {
      set.add(n);
    }
  }

  // finding missing:
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      return [dup, i];
    }
  }

  // if the input is correct, it won't get here
  return [];
}
