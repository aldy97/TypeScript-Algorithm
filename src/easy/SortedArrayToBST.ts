import { TreeNode } from './IsSameTree';

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
