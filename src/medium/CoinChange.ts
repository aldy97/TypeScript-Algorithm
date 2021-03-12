// Time: O(c * n), where c is number of types of coins, and n is amount
// Space: O(n)
function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1 || Infinity);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
