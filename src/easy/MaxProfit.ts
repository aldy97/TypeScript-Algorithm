function maxProfit(prices: number[]): number {
  let minPrice: number = Math.max(...prices);
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
