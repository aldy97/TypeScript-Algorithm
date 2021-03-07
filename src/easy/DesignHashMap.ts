// put, get, remove: O(1)
class MyHashMap {
  set: Set<number>;
  values: number[];
  constructor() {
    this.set = new Set<number>();
    this.values = new Array<number>();
  }

  put(key: number, value: number): void {
    this.set.add(key);
    this.values[key] = value;
  }

  get(key: number): number {
    if (this.set.has(key)) {
      return this.values[key];
    } else {
      return -1;
    }
  }

  remove(key: number): void {
    this.set.delete(key);
  }
}
