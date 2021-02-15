interface Row {
  index: number;
  soldiers: number;
}

// Time: O(nlogn)
// Space: O(n)
function kWeakestRows(mat: number[][], k: number): number[] {
  const rows: Row[] = [];
  for (let i = 0; i < mat.length; i++) {
    rows.push({ index: i, soldiers: mat[i].filter((e) => e === 1).length });
  }
  rows.sort((a, b) => a.soldiers - b.soldiers);

  return rows.slice(0, k).map((row) => row.index);
}
