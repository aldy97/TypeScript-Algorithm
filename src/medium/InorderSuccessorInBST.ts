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

// Time: O(n)
const inorder = (vals: number[], root: TreeNode | null): void => {
  if (!root) return;

  inorder(vals, root.left);
  vals.push(root.val);
  inorder(vals, root.right);
};

// Time: O(h)
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

// Insights: if current node is smaller or equal to p.val, then we can get rid of the left part of the tree
// Time: O(n)
// Space: O(1), no memory allocated, using while loop to avoid recursion
function inorderSuccessor2(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  if (!p) return null;

  let res = null;
  while (root) {
    if (p.val >= root.val) {
      root = root.right;
    } else {
      res = root;
      root = root.left;
    }
  }

  return res;
}
