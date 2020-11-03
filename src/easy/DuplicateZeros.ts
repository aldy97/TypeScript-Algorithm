/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const arrCopy = [...arr];
  const n = arr.length;
  let curr = 0;
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== 0) {
      arr[curr] = arrCopy[i];
    } else {
      arr[curr] = 0;
      arr[++curr] = 0;
    }
    curr++;
  }
  arr = arr.slice(0, n);
  console.log(arr);
}
