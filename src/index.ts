//apparently this is not a good solution due to big space consumption
function sortColors(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }
  let map = new Map<number, number>();
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, (map.get(num) as number) + 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.get(0) !== 0 && map.get(0) !== undefined) {
      nums[i] = 0;
      map.set(0, (map.get(0) as number) - 1);
    } else if (map.get(1) !== 0 && map.get(1) !== undefined) {
      nums[i] = 1;
      map.set(1, (map.get(1) as number) - 1);
    } else {
      nums[i] = 2;
    }
  }
}

console.log(sortColors([1, 1]));
