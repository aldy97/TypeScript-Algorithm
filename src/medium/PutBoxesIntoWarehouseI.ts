// Insights: sort boxes in ascending order, try to push to the right of the warehouse
// Time: O(n * m), where n is number of boxes and m is the size of warehouse
// Space: O(1)
function maxBoxesInWarehouse1(boxes: number[], warehouse: number[]): number {
  boxes = boxes.sort((a, b) => {
    return a - b;
  });
  // keep track of the index of the last box is placed at in the warehouse
  let index = warehouse.length,
    count = 0;

  for (const b of boxes) {
    let insertable = -1;
    for (let i = 0; i < index; i++) {
      if (warehouse[i] < b) break;
      insertable = i;
    }
    // if box is inserted update its location and count, else terminate
    if (insertable !== -1) {
      index = insertable;
      count++;
    } else {
      break;
    }
  }

  return count;
}

// Leetcode solution: the "actual" height of the current index of warehouse depends on the height of the previous spot
// Time: O(nlogn + m)
// Space: O(1)
function maxBoxesInWarehouse2(boxes: number[], warehouse: number[]): number {
  // Preprocess the height of the warehouse rooms to get usable heights
  for (let i = 1; i < warehouse.length; i++) {
    warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
  }

  boxes = boxes.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  for (let i = warehouse.length - 1; i >= 0; i--) {
    if (count < boxes.length && boxes[count] <= warehouse[i]) {
      count++;
    }
  }

  return count;
}
