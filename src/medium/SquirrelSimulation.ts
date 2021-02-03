// Insights: the order does not matter except for the first one to pick
/** The saving, d, is the difference between the distance between
 * the tree and the current nut & the distance between the current nut and the squirrel **/
// Time: O(n)
// Space: O(1)
function minDistance(
  height: number,
  width: number,
  tree: number[],
  squirrel: number[],
  nuts: number[][]
): number {
  let total_dist = 0;
  let d = -Infinity;

  function distance(a: number[], b: number[]): number {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  for (const nut of nuts) {
    total_dist += distance(nut, tree) * 2;
    /** for this nut, we need not travel from the tree to the nut,
     * but need to travel an additional distance from the squirrel's original position to the nut **/
    d = Math.max(d, distance(nut, tree) - distance(nut, squirrel));
  }

  return total_dist - d;
}
