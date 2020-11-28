function partitionLabels(S: string): number[] {
  let map = new Map<string, number>();
  let start = 0;
  let end = 0;
  let result: number[] = [];
  for (let i = 0; i < S.length; i++) {
    map.set(S[i], i);
  }

  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, map.get(S[i]) as number);
    if (i == end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
}
