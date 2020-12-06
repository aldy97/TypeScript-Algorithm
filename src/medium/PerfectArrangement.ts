function countArrangement(N: number): number {
  let ans = 0;

  function backtrack(curr: number[], pos: number): void {
    if (curr.length === N) {
      ans++;
    } else {
      const set = new Set<number>(curr);
      for (let i = 1; i <= N; i++) {
        if (!set.has(i) && (pos % i === 0 || i % pos === 0)) {
          backtrack([...curr, i], pos + 1);
        }
      }
    }
  }
  // 1-index
  backtrack([], 1);
  return ans;
}
