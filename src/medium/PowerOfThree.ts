// Insights: the biggest x is 19, 3^19 = 1162261467
// Time: O(1)
// Space: O(1)
function isPowerOfThree(n: number): boolean {
  return n > 0 && 1162261467 % n == 0;
}
