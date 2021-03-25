function pacificAtlantic(matrix: number[][]): number[][] {
  if (matrix.length === 0) return [];
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let res: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      function helper(
        row: number,
        col: number,
        prevHeight: number,
        board: number[][]
      ) {
        // bounds, restriction check
        if (
          row < 0 ||
          row >= matrix.length ||
          col < 0 ||
          col >= matrix[0].length ||
          matrix[row][col] > prevHeight ||
          board[row][col] === 1
        ) {
          return;
        }

        board[row][col] = 1;
        for (const [a, b] of dirs) {
          helper(row + a, col + b, matrix[row][col], board);
        }
      }

      const board = getBoard(matrix);
      helper(i, j, Infinity, board);
      if (canReachBothOcean(board)) {
        res.push([i, j]);
      }
    }
  }

  return res;
}

function canReachBothOcean(matrix: number[][]): boolean {
  let p = false;
  let a = false;
  if (matrix[0].includes(1)) {
    p = true;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === 1) {
        p = true;
        break;
      }
    }
  }

  if (matrix[matrix.length - 1].includes(1)) {
    a = true;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][matrix[0].length - 1] === 1) {
        a = true;
        break;
      }
    }
  }

  return p && a;
}

function getBoard(matrix: number[][]) {
  let board: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    board.push(new Array(matrix[0].length).fill(0));
  }

  return board;
}
