import { TreeNode } from "../easy/IsSameTree";
// Time: O(n)
// Space: O(n)
function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  let ans: number[] = [],
    vix = 0;

  const dfs = (node: TreeNode | null) => {
    if (!node || ans[0] === -1) return;
    if (node.val !== voyage[vix++]) ans = [-1];
    else if (node.left && node.left.val !== voyage[vix]) {
      ans.push(node.val);
      dfs(node.right);
      dfs(node.left);
    } else {
      dfs(node.left);
      dfs(node.right);
    }
  };

  dfs(root);
  return ans;
}
