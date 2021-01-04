// Backtracking
// Time: O(p), where p is number of permutations
// Space: O(n), where n is number of helper calls
function countArrangement(n: number): number {
  let res = 0;

  const helper = (num: number[], index: number): void => {
    if (num[index - 1] % index !== 0 && index % num[index - 1] !== 0) {
      return;
    }
    if (index === n) {
      res++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!num.includes(i)) {
        helper([...num, i], index + 1);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    helper([i], 1);
  }

  return res;
}
