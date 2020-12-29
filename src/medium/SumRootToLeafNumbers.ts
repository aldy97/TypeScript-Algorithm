import { TreeNode } from "../easy/IsSameTree";
// Time: O(n), since one has to visit each node.
// Space: O(H), up to O(H) to keep the recursion stack, where H is a tree height.
function sumNumbers(root: TreeNode | null): number {
  // base case:
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
