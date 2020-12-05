function countArrangement(N: number): number {
  let ans = 0;

  function backtrack(curr: number[]): void {
    if (curr.length === N) {
      ans++;
    } else {
      const index = curr.length + 1;
      const set = new Set<number>(curr);
      for (let i = 1; i <= N; i++) {
        if (!set.has(i) && (index % i === 0 || i % index === 0)) {
          backtrack([...curr, i]);
        }
      }
    }
  }

  backtrack([]);
  return ans;
}
