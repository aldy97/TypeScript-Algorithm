import { TreeNode } from '../easy/IsSameTree';

function dp(root: TreeNode | null): [number, number] {
  if (!root) {
    return [0, 0];
  }
  const left = dp(root.left);
  const right = dp(root.right);
  const rob = root.val + left[0] + right[0];
  const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return [not_rob, rob];
}

function robIII(root: TreeNode | null): number {
  const res = dp(root);
  return Math.max(res[0], res[1]);
}
