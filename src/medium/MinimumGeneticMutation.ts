function mutatable(s1: string, s2: string): boolean {
  let diff = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (diff > 1) {
        break;
      }
    }
  }
  return diff === 1;
}

function minimumGeneticMutation(start: string, end: string, bank: string[]): number {
  let ans = Infinity;

  function backtrack(curr: string, visited: string[], mutated: number): void {
    if (curr === end) {
      ans = Math.min(ans, mutated);
      return;
    }
    for (const str of bank) {
      if (!visited.includes(str) && mutatable(curr, str)) {
        backtrack(str, [...visited, curr], mutated + 1);
      }
    }
  }

  backtrack(start, [], 0);
  return ans === Infinity ? -1 : ans;
}
