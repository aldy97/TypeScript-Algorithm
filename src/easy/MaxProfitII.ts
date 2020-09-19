/** This solution uses DP table to solve this problem.
 *  dp[i][j] means the current max profit
 *  i means the current day
 *  j is either 0(no stock) or 1(has stock in hand).
 *  **/
function maxProfitII(prices: number[]): number {
  //base case
  let dp: number[][] = [[0, -prices[0]]];
  const n = prices.length;
  for (let i = 1; i < prices.length; i++) {
    const noStock = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    const hasStock = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp.push([noStock, hasStock]);
  }
  return dp[n - 1][0];
}
