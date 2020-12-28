import { TreeNode } from "../easy/IsSameTree";
// DFS: Time and Space: O(n)
function sumNumbers(root: TreeNode | null): number {
  // base case
  if (!root) return 0;
  let ans = 0;

  function helper(root: TreeNode, curr: string): void {
    curr += root.val.toString();
    // determines whether current node is a leaf node
    if (!root.left && !root.right) {
      ans += parseInt(curr);
      return;
    }
    if (root.left) {
      helper(root.left, curr);
    }
    if (root.right) {
      helper(root.right, curr);
    }
  }

  helper(root, "");
  return ans;
}
