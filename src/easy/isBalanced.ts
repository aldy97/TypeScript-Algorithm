import { TreeNode } from "./IsSameTree";

function getHeight(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const LH = getHeight(root.left);
  const RH = getHeight(root.right);
  if (Math.abs(LH - RH) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}
