interface Employee {
  id: number;
  importance: number;
  subordinates: number[];
}
function getImportance(employees: Employee[], id: number): number {
  if (employees.length == 0) return 0;

  let map = new Map<number, Employee>();
  for (const e of employees) {
    map.set(e.id, e);
  }

  let queue: number[] = [id];
  let ans = 0;

  while (queue) {
    const currID = queue.shift() as number;
    const currE = map.get(currID) as Employee;

    ans += currE.importance;
    queue.push(...currE.subordinates);
  }

  return ans;
}
