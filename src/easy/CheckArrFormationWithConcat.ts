// Time and Space: O(n)
// My own explanation: https://leetcode.com/problems/check-array-formation-through-concatenation/discuss/997098/JS-O(n)-Space-andand-Time-Solution
function canFormArray(arr: number[], pieces: number[][]): boolean {
  let map = new Map<number, number[]>();
  for (const piece of pieces) {
    map.set(piece[0], piece.slice(1));
  }

  let p = 0;
  while (p < arr.length) {
    const piece = map.get(arr[p]);
    if (piece === undefined) {
      return false;
    } else if (piece.length > 0) {
      for (const num of piece) {
        if (arr[++p] !== num) {
          return false;
        }
      }
    }
    p++;
  }

  return true;
}
