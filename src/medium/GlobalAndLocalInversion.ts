// Insights: every number in A should not be more than 1 units away from its position if A is ordered.
// Time: O(n)
// Space: O(1)
function isIdealPermutation(A: number[]): boolean {
  for (let i = 0; i < A.length; i++) {
    if (Math.abs(A[i] - i) > 1) {
      return false;
    }
  }

  return true;
}
