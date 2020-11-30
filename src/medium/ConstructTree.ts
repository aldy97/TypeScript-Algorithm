import { TreeNode } from "../easy/IsSameTree";
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let map = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return buildTreeHelper(
    preorder,
    0,
    preorder.length,
    inorder,
    0,
    inorder.length,
    map
  );
}

function buildTreeHelper(
  preOrder: number[],
  p_start: number,
  p_end: number,
  inOrder: number[],
  i_start: number,
  i_end: number,
  map: Map<number, number>
): TreeNode | null {
  if (p_start === p_end) {
    return null;
  }
  const rootVal = preOrder[p_start];
  let root = new TreeNode(rootVal);
  const i_root_index = map.get(rootVal) as number;
  // numbers of ele in the left subtree
  const leftNum = i_root_index - i_start;
  // recursively chaging start and end for both pre and in, start is inclusive and end is exclusive
  // the range from start to end in both preorder and inorder represents all ele in the left or all ele in the right
  root.left = buildTreeHelper(
    preOrder,
    p_start + 1,
    p_start + leftNum + 1,
    inOrder,
    i_start,
    i_root_index,
    map
  );
  root.right = buildTreeHelper(
    preOrder,
    p_start + leftNum + 1,
    p_end,
    inOrder,
    i_root_index + 1,
    i_end,
    map
  );
  return root;
}
