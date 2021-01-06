import { TreeNode } from "../easy/IsSameTree";

// DFS: time limit exceeded due to bit conversion
// Time and Space: O(n)
// After we get the sum of a subtree, then we know the sum of the other subtress by conducting total sum - subSum
function getSum(root: TreeNode | null): number {
  if (!root) return 0;
  return root.val + getSum(root.left) + getSum(root.right);
}

function maxProduct(root: TreeNode | null): number {
  if (!root) return 0;
  const sum = getSum(root);
  let max = 0;

  function helper(root: TreeNode | null): number {
    if (!root) return 0;
    max = Math.max(getSum(root) * (sum - getSum(root)), max);
    return Math.max(helper(root.left), helper(root.right));
  }

  helper(root.left);
  helper(root.right);

  return max < Math.pow(2, 31) ? max : max % (Math.pow(10, 9) + 7);
}
