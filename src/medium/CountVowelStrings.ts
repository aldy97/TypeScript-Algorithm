function countVowelStrings(n: number): number {
  const vowels = [5, 4, 3, 2, 1];
  let ans = 0;

  function helper(len: number, last: number): void {
    if (len === n) {
      ans++;
      return;
    } else {
      for (const n of vowels) {
        if (last >= n) {
          helper(len + 1, n);
        }
      }
    }
  }

  helper(0, Infinity);
  return ans;
}
