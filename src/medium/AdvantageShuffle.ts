function advantageCount(A: number[], B: number[]): number[] {
  let sorted = A.sort((a, b) => a - b);
  let map = new Map<number, number>();
  for (const n of sorted) {
    const curr = map.get(n) || 0;
    map.set(n, curr + 1);
  }
  const res: number[] = [];

  for (const n of B) {
    let pushed = false;
    for (const [k, v] of map) {
      if (k > n && v > 0) {
        res.push(k);
        map.set(k, v - 1);
        pushed = true;
        break;
      }
    }

    if (!pushed) {
      for (const [k, v] of map) {
        if (v > 0) {
          res.push(k);
          map.set(k, (map.get(k) as number) - 1);
          break;
        }
      }
    }
  }

  return res;
}

function advantageCount2(A: number[], B: number[]): number[] {
  const mapB = B.map((n, i) => [n, i]);
  const len = A.length;
  const output = [];
  const useless = [];

  A.sort((a, b) => a - b);
  mapB.sort((a, b) => a[0] - b[0]);

  let currB = 0;

  for (let i = 0; i < len; i++) {
    const [numB, idxB] = mapB[currB];

    if (numB >= A[i]) useless.push(A[i]);
    else {
      output[idxB] = A[i];
      currB++;
    }
  }

  for (let i = 0; i < len; i++) {
    if (output[i] === undefined) {
      output[i] = useless.pop();
    }
  }

  return output as number[];
}
