// DFS solution:
// Space and Time: O(n)
function killProcessDFS(pid: number[], ppid: number[], kill: number): number[] {
  const ans: number[] = [];
  // key is parent, and value is sons
  let map = new Map<number, number[]>();
  for (let i = 0; i < pid.length; i++) {
    const curr = map.get(ppid[i]) || [];
    curr.push(pid[i]);
    map.set(ppid[i], curr);
  }

  function dfs(kill: number) {
    console.log(kill);
    ans.push(kill);
    if (!map.get(kill)) return;
    for (const id of Object.values(map.get(kill) as number[])) {
      dfs(id);
    }
  }

  dfs(kill);
  return ans;
}

// BFS solution:
// Space and Time: O(n)
function killProcessBFS(pid: number[], ppid: number[], kill: number): number[] {
  const ans: number[] = [];
  let queue: number[] = [kill];

  // key is parent, and value is sons
  let map = new Map<number, number[]>();
  for (let i = 0; i < pid.length; i++) {
    const curr = map.get(ppid[i]) || [];
    curr.push(pid[i]);
    map.set(ppid[i], curr);
  }

  while (queue.length > 0) {
    const currP = queue.pop() as number;
    ans.push(currP);
    if (map.has(currP)) {
      for (const id of map.get(currP) as number[]) {
        queue.push(id);
      }
    }
  }

  return ans;
}
