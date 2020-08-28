// function merge1(intervals: number[][]): number[][] {
//   for (let i = 0; i < intervals.length - 1; i++) {
//     if (intervals[i][1] >= intervals[i + 1][0]) {
//       intervals[i] = [
//         Math.min(intervals[i][0], intervals[i + 1][0]),
//         Math.max(intervals[i][1], intervals[i + 1][1]),
//       ];
//       intervals.splice(i + 1, 1);
//     }
//   }
//   return intervals;
// }

// console.log(
//   merge1([
//     [1, 4],
//     [4, 5],
//   ])
// );
