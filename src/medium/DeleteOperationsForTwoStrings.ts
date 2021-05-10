// Insights: dp
// Time: O(m * n)
// Space: O(m * n)
function minDistance2(word1: string, word2: string): number {
  const l1 = word1.length;
  const l2 = word2.length;

  const dp: number[][] = new Array(l1 + 1)
    .fill(0)
    .map(() => new Array(l2 + 1).fill(0));

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // if match, set to previous match for letter at both words
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // if no match, set to best match of removing a letter from either word
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  const maxSubLen = dp[l1][l2];
  return l1 + l2 - 2 * maxSubLen;
}
