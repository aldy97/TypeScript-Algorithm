// Insights:  When we see a closing bracket, we add twice the score of the previous deeper part - except when counting (), which has a score of 1.
// Time: O(n)
// Space: O(n)
function scoreOfParentheses(S: string): number {
  let stack: number[] = [0];
  for (const c of S) {
    if (c === "(") {
      stack.push(0);
    } else {
      const v = stack.pop() as number;
      const w = stack.pop() as number;
      stack.push(w + Math.max(2 * v, 1));
    }
  }

  return stack.pop() as number;
}
