// function isSubsequence(s: string, t: string): boolean {
//   if (s.length === 0) return true;
//   if (t.length === 0) return false;
//   let dp: string[][] = [];
//   dp[0] = [t[0]];
//   for (let i = 1; i < t.length; i++) {
//     dp[i] = dp[i - 1].map((str) => str.concat(t[i])).concat(dp[i - 1]);
//   }
//   return dp[t.length - 1].includes(s);
// }

function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (let j = 0; i < s.length && j < t.length; ++j) if (s[i] == t[j]) ++i;
  return i == s.length;
}

console.log(isSubsequence('abc', 'aasdsdbasdsc'));
