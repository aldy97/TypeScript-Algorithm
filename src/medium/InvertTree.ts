import { TreeNode } from '../easy/IsSameTree';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  if (root.left && root.right) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  } else if (root.left) {
    root.right = root.left;
    root.left = null;
  } else if (root.right) {
    root.left = root.right;
    root.right = null;
  }
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
