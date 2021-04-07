// Insights: Math
// Time: O(1)
// Space: O(1)
function minOperations(n: number): number {
  return n % 2 == 0 ? (n * n) / 4 : (n * (n - 1)) / 4;
}
