function findKthPositive(arr: number[], k: number): number {
  const set = new Set(arr);
  let count = 0;
  let res = 0;
  for (let i = 1; i < Infinity; i++) {
    if (!set.has(i)) {
      count++;
      res = i;
    }
    if (count === k) {
      return res;
    }
  }
  return res;
}
