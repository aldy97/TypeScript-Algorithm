// TODO: not finished
function leastBricks(wall: number[][]): number {
  const rows = wall.length;
  let map = new Map<number, number>();

  for (let i = 0; i < rows; i++) {
    for (let j = 1; j < wall[i].length - 1; j++) {
      wall[i][j] += wall[i][j - 1];
      map.set(wall[i][j], (map.get(wall[i][j]) || 0) + 1);
    }
  }
  console.log(map);
  let max = 0;
  for (const [k, v] of map) {
    max = Math.max(max, v);
  }

  return wall.length - max;
}
