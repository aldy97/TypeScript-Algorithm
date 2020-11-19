function searchSurround(
  currBoard: string[][],
  word: string,
  i: number,
  j: number
): boolean {
  if (word.length === 0) {
    return true;
  }
  const height = currBoard.length;
  const width = currBoard[0].length;

  // boundary check
  if (i < 0 || i === height || j < 0 || j === width) {
    return false;
  }
  if (word[0] !== currBoard[i][j]) {
    return false;
  } else {
    currBoard[i][j] = " ";
    console.log(currBoard);
    word = word.slice(1);
    return (
      searchSurround(currBoard, word, i + 1, j) ||
      searchSurround(currBoard, word, i - 1, j) ||
      searchSurround(currBoard, word, i, j + 1) ||
      searchSurround(currBoard, word, i, j - 1)
    );
  }
}

function getCopyBoard(board: string[][]): string[][] {
  const height = board.length;
  const width = board[0].length;
  let copyBoard: string[][] = [];
  for (let i = 0; i < height; i++) {
    copyBoard.push(new Array(width).fill("*"));
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      copyBoard[i][j] = board[i][j];
    }
  }
  return copyBoard;
}

// TODO: board should be not affected
function exist(board: string[][], word: string): boolean {
  const height = board.length;
  const width = board[0].length;

  //Convert to uppercases for both board and string:
  const uppercaseWord = word.toUpperCase();
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      board[i][j] = board[i][j].toUpperCase();
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const copyBoard = getCopyBoard(board);
      const result = searchSurround(copyBoard, uppercaseWord, i, j);
      if (result) {
        return true;
      }
    }
  }

  return false;
}
