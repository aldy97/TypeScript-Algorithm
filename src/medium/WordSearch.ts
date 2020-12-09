function exist(board: string[][], word: string): boolean {
  const row = board.length;
  const col = board[0].length;
  if (row === 0) {
    return false;
  }

  function backtrack(
    board: string[][],
    row: number,
    col: number,
    index: number
  ) {
    // bound check
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
      return false;
    }
    // word check
    if (board[row][col] !== word[index]) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }

    const temp = board[row][col];
    board[row][col] = "$";

    const up = backtrack(board, row - 1, col, index + 1);
    const down = backtrack(board, row + 1, col, index + 1);
    const left = backtrack(board, row, col - 1, index + 1);
    const right = backtrack(board, row, col + 1, index + 1);
    if (up || down || left || right) {
      return true;
    }
    // restore value after attemp failed
    board[row][col] = temp;
    return false;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (backtrack(board, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
