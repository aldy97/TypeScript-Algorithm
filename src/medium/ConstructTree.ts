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
  const leftNum = i_root_index - i_start;
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
