// Time: O(m * n);
// Space: O(m * n);
function getIslandFromZeroCoordinate(path: number[][]) {
  var rowTranspose = path[0][0];
  var colTranspose = path[0][1];
  var str = "";
  for (let i = 0; i < path.length; i++) {
    var newRow = path[i][0] - rowTranspose;
    var newCol = path[i][1] - colTranspose;
    // store the row and col in a string so that it can be easily added to a set
    str += `${newRow}${newCol}`;
  }
  return str;
}

function performDfs(grid: number[][], i: number, j: number, path: number[][]) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
    return;
  }

  if (grid[i][j] === 0) {
    return;
  }

  path.push([i, j]);

  grid[i][j] = 0;
  performDfs(grid, i + 1, j, path);
  performDfs(grid, i - 1, j, path);
  performDfs(grid, i, j + 1, path);
  performDfs(grid, i, j - 1, path);
}

var numDistinctIslands = function (grid: number[][]) {
  var uniqueIslands = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // the path is used to keep track of how DFS found the islands
        var path: number[][] = [];
        performDfs(grid, i, j, path);
        uniqueIslands.add(getIslandFromZeroCoordinate(path));
      }
    }
  }

  // since Set has only unique values, the size will return the number of distinct islands
  return uniqueIslands.size;
};
