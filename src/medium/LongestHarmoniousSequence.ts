// Time: O(n)
// Space: O(n)
function findLHS(nums: number[]): number {
  let max = 0;
  let map = new Map<number, number>();
  for (const n of nums) {
    const occ = map.get(n) || 0;
    map.set(n, occ + 1);
  }

  for (const [key, value] of map) {
    if (map.has(key + 1)) {
      const len = value + (map.get(key + 1) as number);
      max = Math.max(max, len);
    }
  }

  return max;
}
