// Time: O(1), all operations take only constant time
// Space: O(n)
class MyCircularQueue {
  queue: number[];
  length: number;

  constructor(k: number) {
    this.queue = [];
    this.length = k;
  }

  enQueue(value: number): boolean {
    if (this.queue.length === this.length) {
      return false;
    } else {
      this.queue.push(value);
      return true;
    }
  }

  deQueue(): boolean {
    if (this.queue.length === 0) {
      return false;
    } else {
      this.queue.shift();
      return true;
    }
  }

  Front(): number {
    if (this.queue.length === 0) {
      return -1;
    } else {
      return this.queue[0];
    }
  }

  Rear(): number {
    if (this.queue.length === 0) {
      return -1;
    } else {
      return this.queue[this.queue.length - 1];
    }
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.length;
  }
}
