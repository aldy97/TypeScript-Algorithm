function backtrack(
  ans: string[],
  curr: string,
  open: number,
  close: number,
  n: number
): void {
  if (curr.length === n * 2) {
    ans.push(curr);
    return;
  }
  //validation rule: for every ')', there must be a '(' on its left
  if (open < n) {
    backtrack(ans, curr + '(', open + 1, close, n);
  }
  if (close < open) {
    backtrack(ans, curr + ')', open, close + 1, n);
  }
}

function generateParenthesis(n: number): string[] {
  let ans: string[] = [];
  backtrack(ans, '', 0, 0, n);
  return ans;
}
