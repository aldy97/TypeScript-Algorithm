function wordBreak(s: string, wordDict: string[]): boolean {
  if (s.length === 0) {
    return true;
  }
  const set = new Set(wordDict);
  let dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const word = s.slice(start, end);
      if (dp[start] && set.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
