function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 0) {
    return [];
  }
  if (!edges) {
    return [0];
  }
  let minHeight = Infinity;
  let result: number[] = [];
  //go through each cases of i being the root
  for (let i = 0; i < n; i++) {
    let queue: number[] = [i];
    let edgeSet = new Set(edges);
    let height = 1;
    while (queue.length !== 0) {
      let currLevel: number[] = [];
      const size = queue.length;
      if (edgeSet.size === 0) {
        break;
      }
      for (let i = 0; i < size; i++) {
        const curr = queue.shift() as number;
        for (let pair of edgeSet) {
          if (pair.includes(curr)) {
            currLevel.push(pair[0] === curr ? pair[1] : pair[0]);
            edgeSet.delete(pair);
          }
        }
      }
      queue = currLevel;
      height++;
    }
    if (height < minHeight) {
      result = [i];
      minHeight = height;
    } else if (height === minHeight) {
      result.push(i);
    }
  }
  return result;
}
