// Insights: DFS, my original work
// Time: O(n + e), n is number of rooms and e is number of keys
// Space: O(n)
function canVisitAllRooms(rooms: number[][]): boolean {
  if (rooms.length < 2) return true;

  let visited = new Set<number>([0]);
  let keys = rooms[0];

  while (keys.length) {
    const key = keys.pop() as number;
    if (visited.has(key)) continue;

    visited.add(key);
    const accessible = rooms[key];
    for (const room of accessible) {
      if (!visited.has(room)) {
        keys.push(room);
      }
    }
  }

  return visited.size === rooms.length;
}

// Written by others
function canVisitAllRooms2(rooms: number[][]): boolean {
  const visited = new Set();
  const access = [0];

  while (access.length) {
    const roomId = access.pop() as number;

    if (visited.has(roomId)) continue;

    visited.add(roomId);
    access.push(...rooms[roomId]);
  }

  return rooms.length === visited.size;
}
