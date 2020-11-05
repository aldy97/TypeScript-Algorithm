/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
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
      } else if (curr === 1) {
        continue;
      } else if (numOfLives === 3 && curr === 0) {
        map.set([i, j], 1);
      }
    }
  }

  for (let pair of map) {
    board[pair[0][0]][pair[0][1]] = pair[1];
  }
}
