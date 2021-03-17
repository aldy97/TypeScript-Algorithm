// Time: O(n)
// Space: O(1)
function maxProfit(prices: number[], fee: number): number {
  // cash is the maximum when I did not have a share yesterday
  // hold: this is your balance when you last bought a stock (cash-current_price). It does not get updated unless you buy a stock again.
  let cash = 0,
    hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // sell stock
    cash = Math.max(cash, hold + prices[i] - fee);
    // buy stock
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
}
