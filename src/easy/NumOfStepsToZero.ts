// Time: O(logn)
// Space: O(1)
function numberOfSteps(num: number): number {
  let steps = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    steps++;
  }
  return steps;
}
