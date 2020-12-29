import { TreeNode } from "../easy/IsSameTree";
// A path form a palindrome if at most one digit has an odd frequency (parity).
function canFormPalindrome(path: number[]): boolean {
  let odds = 0;
  let map = new Map<number, number>();

  for (const num of path) {
    const val = map.get(num) || 0;
    map.set(num, val + 1);
  }

  for (const [k, v] of map) {
    if (v % 2 !== 0) {
      odds++;
      if (odds > 1) {
        return false;
      }
    }
  }

  return true;
}

function pseudoPalindromicPaths(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;

  function helper(root: TreeNode, path: number[]) {
    if (!root.left && !root.right) {
      path.push(root.val);
      ans = canFormPalindrome(path) ? ans + 1 : ans;
      return;
    }
    if (root.left) {
      helper(root.left, [...path, root.val]);
    }
    if (root.right) {
      helper(root.right, [...path, root.val]);
    }
  }

  helper(root, []);
  return ans;
}
