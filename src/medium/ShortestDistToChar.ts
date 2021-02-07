// Time: O(n)
// Space: O(n)
function shortestToChar(s: string, c: string): number[] {
  let indexesOfC: number[] = [];
  let ans: number[] = [];

  // helper:
  function getCloest(arr: number[], index: number): number {
    let min = Infinity;
    for (const n of arr) {
      min = Math.min(Math.abs(n - index), min);
    }

    return min;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexesOfC.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      ans.push(0);
    } else {
      ans.push(getCloest(indexesOfC, i));
    }
  }

  return ans;
}
