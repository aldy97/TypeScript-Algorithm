// Time: O(1) for each single operation
// Space: O(n) for storing the whole log
class Logger {
  map: Map<string, number>;
  constructor() {
    this.map = new Map<string, number>();
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (
      this.map.get(message) !== undefined &&
      (this.map.get(message) as number) > timestamp
    ) {
      return false;
    } else {
      this.map.set(message, timestamp + 10);
      return true;
    }
  }
}
