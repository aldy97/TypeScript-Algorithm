function combine(n: number, k: number): number[][] {
  if (n === 1 && k === 1) {
    return [[1]];
  }
  let results: number[][] = [];
  function backtrack(max: number, curr: number[], index: number) {
    if (curr.length === max) {
      results.push(curr);
      return;
    } else {
      while (index <= n) {
        backtrack(max, [...curr, index], ++index);
      }
    }
  }
  backtrack(k, [], 1);
  return results;
}
