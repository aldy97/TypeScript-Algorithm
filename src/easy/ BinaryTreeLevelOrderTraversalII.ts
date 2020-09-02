import { TreeNode } from './IsSameTree';
function levelOrder(node: TreeNode | null, d: number, level: number[] = []) {
  if (node == null) {
    return level;
  }
  if (d === 1) {
    level.push(node.val);
  } else if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}

/*
  computes the largest root-to-leaf path,
  using 1-based counting.
*/
function height(node: TreeNode | null) {
  if (node == null) {
    /* base case */
    return 0;
  }
  let left: number = height(node.left);
  let right: number = height(node.right);

  return Math.max(left, right) + 1;
}

function levelOrderBottom(root: TreeNode | null): number[][] {
  let h = height(root); /* get the height using helper fn below */
  let results = []; /* init an array to hold final answer */
  let depth = 1; /* init depth to 1 since we are using 1-based height */
  for (depth; depth <= h; depth++) {
    /* iterate from depth to tree height */
    results.push(
      levelOrder(root, depth)
    ); /* push an array of each level's node values to results */
  }

  return results.reverse();
}
