import { TreeNode } from './IsSameTree';

function height(node: TreeNode | null) {
  if (node == null) {
    /* base case */
    return 0;
  }
  let left: number = height(node.left);
  let right: number = height(node.right);

  return Math.max(left, right) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  return (
    root == null ||
    (isBalanced(root.left) &&
      isBalanced(root.right) &&
      Math.abs(height(root.left) - height(root.right)) < 2)
  );
}
