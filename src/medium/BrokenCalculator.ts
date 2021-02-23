// Insights: Instead of multiplying by 2 or subtracting 1 from X, we could divide by 2 (when Y is even) or add 1 to Y.
// Time: O(logY)
// Space: O(1)
function brokenCalc(X: number, Y: number): number {
  let ans = 0;
  while (Y > X) {
    if (Y % 2 == 1) {
      Y++;
    } else {
      Y /= 2;
    }
    ans++;
  }

  return ans + X - Y;
}
