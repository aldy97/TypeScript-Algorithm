function insert(intervals: number[][], newInterval: number[]): number[][] {
  let size = intervals.length;
  let index = 0;
  let res = [];

  while (index < size && intervals[index][1] < newInterval[0]) {
    res.push(intervals[index]);
    index++;
  }
  while (index < size && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }
  res.push(newInterval);
  while (index < size) {
    res.push(intervals[index]);
    index++;
  }
  return res;
}
