//Space: O(n), Time: O(n)
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  if (n === 0) {
    return [newInterval];
  }
  let sortedIntervals: number[][] = [];
  let inserted: boolean = false;

  for (let i = 0; i < intervals.length; i++) {
    if (inserted) {
      sortedIntervals.push(intervals[i]);
    } else if (intervals[i][0] < newInterval[0]) {
      sortedIntervals.push(intervals[i]);
    } else {
      sortedIntervals.push(newInterval);
      i--;
      inserted = true;
    }
  }
  if (!inserted) {
    sortedIntervals.push(newInterval);
  }

  let res: number[][] = [sortedIntervals[0]];
  let curr = 0;
  for (let i = 0; i < sortedIntervals.length; i++) {
    if (res[curr][1] < sortedIntervals[i][0]) {
      res.push(sortedIntervals[i]);
      curr++;
    } else {
      res[curr] = [res[curr][0], Math.max(res[curr][1], sortedIntervals[i][1])];
    }
  }
  return res;
}
