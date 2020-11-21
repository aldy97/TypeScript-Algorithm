// Time complexity: O(nlogn), Space: O(n) for storing result
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0 || intervals.length === 1) {
    return intervals;
  }
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [sortedIntervals[0]];
  let curr = 0;
  for (let i = 1; i < sortedIntervals.length; i++) {
    if (res[curr][1] < sortedIntervals[i][0]) {
      res.push(sortedIntervals[i]);
      curr++;
    } else {
      res[curr] = [res[curr][0], Math.max(res[curr][1], sortedIntervals[i][1])];
    }
  }
  return res;
}
