interface Row {
  index: number;
  soldiers: number;
}

// HashMap + Sort
// Time: O(n * m + m * logm) => O(m * (n + logm)), where m is number of rows, and n is number of cols
// Space: O(m)
function kWeakestRows(mat: number[][], k: number): number[] {
  const rows: Row[] = [];
  for (let i = 0; i < mat.length; i++) {
    rows.push({ index: i, soldiers: mat[i].filter((e) => e === 1).length });
  }
  rows.sort((a, b) => a.soldiers - b.soldiers);

  return rows.slice(0, k).map((row) => row.index);
}

// Vertivcal iteration: using the fact that citizens only appear after all soldiers in the row
// Time: O(m * n)
// Space: O(1)
function kWeakestRows2(mat: number[][], k: number): number[] {
  const ans = new Set<number>();
  for (let i = 0; i < mat[0].length; i++) {
    for (let j = 0; j < mat.length && ans.size < k; j++) {
      const row = mat[j];
      if (row[i] === 0 && !ans.has(j)) {
        ans.add(j);
      }
    }
  }

  // this deals with the condition when some/all rows are entirely 1s
  for (let i = 0; i < mat.length && ans.size < k; i++) {
    if (!ans.has(i)) {
      ans.add(i);
    }
  }

  return Array.from(ans);
}
