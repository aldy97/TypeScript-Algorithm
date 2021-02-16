// Time Complexity: (2^N * N)
// Space Complexity: (2^N * N)
function letterCasePermutation(S: string): string[] {
  // helper:
  function isLetter(c: string): boolean {
    return c.toLowerCase() != c.toUpperCase();
  }

  const ans: string[] = [""];
  for (const c of S) {
    const n = ans.length;
    if (isLetter(c)) {
      for (let i = 0; i < n; i++) {
        ans.push(ans[i].slice());
        ans[i] += c.toLowerCase();
        ans[n + i] += c.toUpperCase();
      }
    } else {
      for (let i = 0; i < n; i++) {
        ans[i] += c;
      }
    }
  }

  return ans;
}
