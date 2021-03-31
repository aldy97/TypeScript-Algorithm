// Insights: sort
// Time: O(nlogn)
// Space: O(1)
function canAttendMeetings(intervals: number[][]): boolean {
  if (intervals.length < 2) return true;
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start < intervals[i - 1][1]) return false;
  }

  return true;
}
