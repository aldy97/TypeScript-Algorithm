// MY first attempt: Time limit exceeded
function minJumpsTLE(arr: number[]): number {
  if (arr.length === 1) {
    return 0;
  }
  let minStep = Infinity;
  // key: ele, value: indices of the ele
  let map = new Map<number, number[]>();
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    let value = map.get(n) || [];
    map.set(n, [...value, i]);
  }

  // index is current position, path keeps track of indices that have been walked on
  function backtrack(index: number, path: number[]): void {
    if (path.length > minStep) {
      return;
    }
    if (index === arr.length - 1) {
      minStep = Math.min(minStep, path.length - 1);
      return;
    }
    const pathSet = new Set(path);

    // jump options
    const options = map.get(arr[index]) as number[];
    for (const option of options) {
      if (index !== option && !pathSet.has(option)) {
        backtrack(option, [...path, option]);
      }
    }
    // go forward
    if (!pathSet.has(index + 1)) {
      backtrack(index + 1, [...path, index + 1]);
    }
    // go backward
    if (index !== 0 && !pathSet.has(index - 1)) {
      backtrack(index - 1, [...path, index - 1]);
    }
  }

  backtrack(0, [0]);
  return minStep;
}

// BFS: Time and Space: O(n)
function minJumpsBFS(arr: number[]): number {
  if (arr.length === 1) return 0;
  const sameValIdx = new Map<number, number[]>();
  for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i];
    if (!sameValIdx.has(val)) sameValIdx.set(val, []);
    (sameValIdx.get(val) as number[]).push(i);
  }

  const seen = new Set();
  seen.add(0);
  const queue = [[0, 0]];
  while (queue.length) {
    const [idx, step] = queue.shift() as number[];

    if (idx - 1 >= 0 && !seen.has(idx - 1)) {
      queue.push([idx - 1, step + 1]);
      seen.add(idx - 1);
    }
    if (idx + 1 < arr.length && !seen.has(idx + 1)) {
      // You have to check here to handle this case [7,7,7,7,7...]
      if (idx + 1 === arr.length - 1) return step + 1;
      queue.push([idx + 1, step + 1]);
      seen.add(idx + 1);
    }

    const targetArr = sameValIdx.get(arr[idx]) as number[];
    for (let j = 0; j < targetArr.length; j++) {
      const i = targetArr[j];
      if (!seen.has(i) && i !== idx - 1 && i !== idx + 1) {
        // You have to check here to handle this case [7,7,7,7,7...]
        if (i === arr.length - 1) return step + 1;
        queue.push([i, step + 1]);
        seen.add(i);
      }
    }
  }

  return -1;
}
