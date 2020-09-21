import { TreeNode } from '../easy/IsSameTree';
function backtrack(
  root: TreeNode | null,
  sum: number,
  currentResult: number[],
  result: number[][]
): void {
  if (root == null) return;
  currentResult.push(root.val);
  if (root.left == null && root.right == null && sum == root.val) {
    result.push(currentResult);
    currentResult.pop; //don't forget to remove the last integer
    return;
  } else {
    backtrack(root.left, sum - root.val, currentResult, result);
    backtrack(root.right, sum - root.val, currentResult, result);
  }
  currentResult.pop;
}

function pathSum(root: TreeNode | null, sum: number): number[][] {
  let ans: number[][] = [];
  let current: number[] = [];
  backtrack(root, sum, current, ans);
  return ans;
}
