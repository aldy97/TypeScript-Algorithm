// Time: O(n^2) in the worst case
// Space: O(1)
function numberOfArithmeticSlices(A: number[]): number {
  if (A.length < 3) return 0;

  let res = 0;

  for (let i = 0; i < A.length - 2; i++) {
    let diff: number = 0;
    let count = 1;
    for (let j = i + 1; j < A.length; j++) {
      if (j === i + 1) {
        diff = A[j] - A[i];
        count++;
      } else if (A[j] - A[j - 1] === diff) {
        if (++count >= 3) {
          res++;
        }
      } else {
        break;
      }
    }
  }

  return res;
}
