function containsNearbyDuplicate(nums: number[], k: number): boolean {
  //key is the value, and value is its corresponding index
  let map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
}
