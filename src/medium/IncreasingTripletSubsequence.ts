function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;
  for (const n of nums) {
    if (n < first) {
      first = n;
    } else if (n < second && n > first) {
      second = n;
    } else if (n > second) {
      return true;
    }
  }
  return false;
}
