export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function helper(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return helper(left.left, right.right) && helper(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  return root === null || helper(root.left, root.right);
}
