function missingNumber(nums: number[]): number {
  const max = Math.max(...nums);
  const desire: number[] = [];
  for (let i = 0; i <= max; i++) {
    desire.push(i);
  }
  const set = new Set(nums);
  for (let num of desire) {
    if (!set.has(num)) {
      return num;
    }
  }
  return max + 1;
}
