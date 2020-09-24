function euclideanDistance(point: number[]): number {
  if (point.length === 2) {
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
  }
  return -1;
}

function kClosest(points: number[][], K: number): number[][] {
  return points
    .sort((a, b) => euclideanDistance(a) - euclideanDistance(b))
    .slice(0, K);
}
