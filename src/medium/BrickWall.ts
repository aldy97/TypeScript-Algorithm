// Insights: modifiy each brick, from its length to its edge to the right
// Time: O(n * m), where n is the length, and m is the height
// Space: O(m)
function leastBricks(wall: number[][]): number {
  const rows = wall.length;
  let map = new Map<number, number>();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < wall[i].length - 1; j++) {
      if (j !== 0) wall[i][j] += wall[i][j - 1];
      map.set(wall[i][j], (map.get(wall[i][j]) || 0) + 1);
    }
  }

  let max = 0;
  for (const [k, v] of map) {
    max = Math.max(max, v);
  }

  return wall.length - max;
}
