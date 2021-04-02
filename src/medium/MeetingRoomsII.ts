function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length < 2) return intervals.length;

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let minHeap: number[] = [intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= minHeap[minHeap.length - 1]) {
      minHeap.pop();
    }

    if (minHeap.length && minHeap[minHeap.length - 1] < end) {
      minHeap.unshift(end);
    } else {
      minHeap.push(end);
    }
  }

  return minHeap.length;
}
