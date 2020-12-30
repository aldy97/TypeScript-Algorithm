// Time and Space: O(n)
// Do not change the board when we iterating, store the value for each ele in a map
function gameOfLife(board: number[][]): void {
  // base case
  if (!board) {
    return;
  }

  const map = new Map<[number, number], number>();
  const height = board.length;
  const length = board[0].length;

  function checkSurrondings(row: number, col: number): number {
    //bounds check
    if (row < 0 || row >= height || col < 0 || col >= length) {
      return 0;
    } else if (board[row][col] === 1) {
      return 1;
    } else {
      return 0;
    }
  }

  // first pass: records cell status after mutation in thr map
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < length; j++) {
      let curr = board[i][j];
      const numOfLives =
        checkSurrondings(i - 1, j - 1) +
        checkSurrondings(i - 1, j) +
        checkSurrondings(i - 1, j + 1) +
        checkSurrondings(i, j - 1) +
        checkSurrondings(i, j + 1) +
        checkSurrondings(i + 1, j - 1) +
        checkSurrondings(i + 1, j) +
        checkSurrondings(i + 1, j + 1);

      if ((numOfLives < 2 || numOfLives > 3) && curr === 1) {
        map.set([i, j], 0);
      } else if (numOfLives === 3 && curr === 0) {
        map.set([i, j], 1);
      }
    }
  }

  // second pass: change the board according to map
  for (const [[row, col], value] of map) {
    board[row][col] = value;
  }
}

// Solution 2: no map
// Time: O(n), Space: O(1)
function gameOfLife2(board: number[][]): void {
  // base case:
  if (!board) {
    return;
  }

  const row = board.length;
  const col = board[0].length;

  function helper(row: number, col: number): number {
    if (row < 0 || row === board.length || col < 0 || col === board[0].length) {
      return 0;
    }
    const cellStatus = board[row][col];
    if (cellStatus === 0 || cellStatus === 2) {
      return 0;
    } else if (cellStatus === 1 || cellStatus === -1) {
      return 1;
    }
    return -1;
  }

  function changeCellStatus(row: number, col: number): void {
    const currStatus = board[row][col];
    const count =
      helper(row + 1, col) +
      helper(row - 1, col) +
      helper(row, col + 1) +
      helper(row, col - 1) +
      helper(row + 1, col + 1) +
      helper(row + 1, col - 1) +
      helper(row - 1, col + 1) +
      helper(row - 1, col - 1);
    if (currStatus === 1 && (count < 2 || count > 3)) {
      board[row][col] = -1;
    } else if (currStatus === 0 && count === 3) {
      board[row][col] = 2;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      changeCellStatus(i, j);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0;
      } else if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
}
