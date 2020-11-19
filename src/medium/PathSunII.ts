import { TreeNode } from "../easy/IsSameTree";

function helper(
  root: TreeNode | null,
  sum: number,
  res: number[][],
  path: number[]
) {
  if (root) {
    path.push(root.val);
    // when reaches leaf node, checks whether path sum is equal to assigned sum
    if (!root.left && !root.right && sum === root.val) {
      res.push([...path]);
    }
    helper(root.left, sum - root.val, res, path);
    helper(root.right, sum - root.val, res, path);
    path.pop();
  }
}

function pathSum(root: TreeNode | null, sum: number): number[][] {
  let res: number[][] = [];
  let path: number[] = [];
  helper(root, sum, res, path);
  return res;
}
