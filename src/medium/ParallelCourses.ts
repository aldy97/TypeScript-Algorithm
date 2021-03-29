// Insights: BFS, uses inCount and map to visualize the whole graph
// Time: O(N + E), where N is number of nodes, and E is number of edges
// Space: O(N + E)
function minimumSemesters(n: number, relations: number[][]): number {
  // inCount[index]: number of nodes towards this node index
  let inCount: number[] = new Array<number>(n + 1).fill(0);

  // key: course, value: list of courses that have this course as one pre-req
  let map = new Map<number, number[]>();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }

  for (const r of relations) {
    const courses = map.get(r[0]) as number[];
    courses.push(r[1]);
    map.set(r[0], courses);
    inCount[r[1]]++;
  }

  let term = 0;
  let studiedCount = 0;
  const queue: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    if (inCount[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    term++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const studied = queue.shift() as number;
      studiedCount++;
      for (const c of map.get(studied) as number[]) {
        if (--inCount[c] === 0) {
          queue.push(c);
        }
      }
    }
  }

  return studiedCount === n ? term : -1;
}
