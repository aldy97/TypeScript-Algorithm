import { TreeNode } from "../easy/IsSameTree";
// Insights: in-order traversal
// Time: O(n)
// Space: O(n)
function increasingBST(root: TreeNode | null): TreeNode | null {
  const vals: number[] = [];
  inorder(root, vals);

  let ans = new TreeNode(0);
  let curr = ans;

  for (const v of vals) {
    curr.right = new TreeNode(v);
    curr = curr.right;
  }

  return ans.right;
}

function inorder(root: TreeNode | null, vals: number[]): void {
  if (!root) return;
  inorder(root.left, vals);
  vals.push(root.val);
  inorder(root.right, vals);
}
