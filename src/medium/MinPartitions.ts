// Time: O(n), n is number of digits of n
// Space: O(1)
function minPartitions(n: string): number {
  let res = 0;
  for (const digit of n) {
    if (digit === "9") return 9;
    res = Math.max(res, parseInt(digit));
  }

  return res;
}
