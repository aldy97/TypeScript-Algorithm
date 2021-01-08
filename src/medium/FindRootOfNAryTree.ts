import Node from "./N-arrayTreeLevelOrderTraversal";

// Hint: root has in-degree 0
// Time and Space: O(n);
function findRoot(tree: Node[]): Node | null {
  let childrenVals = new Set<number>();
  for (const node of tree) {
    const valsChildren = node.children.map((child) => child.val);
    for (const val of valsChildren) {
      childrenVals.add(val);
    }
  }

  for (const node of tree) {
    if (!childrenVals.has(node.val)) {
      return node;
    }
  }

  return null;
}

// Insight: If we visit all the nodes and all the child nodes, then the root node would be the only node that we visit once and once only. The rest of the nodes would be visited twice.
// Space: O(1)
// Time: O(n)
function findRoot2(tree: Node[]): Node | null {
  let sum = 0;
  for (const node of tree) {
    sum += node.val;
    for (const child of node.children) {
      sum -= child.val;
    }
  }

  // at this point, sum is the val of the root
  for (const node of tree) {
    if (node.val === sum) {
      return node;
    }
  }

  return null;
}
