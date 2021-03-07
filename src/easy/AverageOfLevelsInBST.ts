import { TreeNode } from "./IsSameTree";
// Time: O(n), n is number of total nodes in the give tree
// Space: O(m), m is maximum number of nodes in the same level
function averageOfLevels(root: TreeNode | null): number[] {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let sum = 0;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift() as TreeNode;
      sum += curr.val;
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(sum / len);
  }

  return res;
}
