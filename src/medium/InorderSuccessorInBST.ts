import { TreeNode } from "../easy/IsSameTree";
// Insights: use inorder traversal to get the increasing order arr from the BST
// Time: O(n)
// Space: O(n)
function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  if (!root || !p) return null;
  let vals: number[] = [];
  inorder(vals, root);

  let succVal = -1;
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] === p.val) {
      succVal = vals[i + 1];
    }
  }

  if (succVal === -1) return null;
  return findNode(succVal, root);
}

const inorder = (vals: number[], root: TreeNode | null): void => {
  if (!root) return;

  inorder(vals, root.left);
  vals.push(root.val);
  inorder(vals, root.right);
};

const findNode = (val: number, root: TreeNode | null): TreeNode | null => {
  if (!root) return null;
  if (root.val === val) {
    return root;
  }
  if (root.val < val) {
    return findNode(val, root.right);
  } else {
    return findNode(val, root.left);
  }
};
