// Bipartite: there is a way of node division such that every edge is connected with two nodes from two groups
// Ingihts: use true/false to divide nodes, perform BFS in the iteration of nodes in the graph
// Time: O(N + E), where N is number of nodes, and E is number of edges
// Space: O(N)
function isBipartite(graph: number[][]): boolean {
  // nodes division
  const colors = new Map<number, boolean>();
  const stack: number[] = [];

  for (let i = 0; i < graph.length; i++) {
    if (colors.has(i)) continue;

    colors.set(i, true);
    stack.push(i);

    while (stack.length > 0) {
      let current = stack.pop() as number;

      for (const neighbour of graph[current]) {
        if (!colors.has(neighbour)) {
          colors.set(neighbour, !colors.get(current));
          stack.push(neighbour);
          continue;
        }

        if (colors.get(neighbour) === colors.get(current)) {
          return false;
        }
      }
    }
  }

  return true;
}
