// function searchSurround(
//   currBoard: string[][],
//   word: string,
//   i: number,
//   j: number
// ): boolean {
//   // console.log("board:", board);
//   // console.log("word: ", word);
//   if (word.length === 0) {
//     return true;
//   }
//   const height = currBoard.length;
//   const width = currBoard[0].length;

//   // boundary check
//   if (i < 0 || i === height || j < 0 || j === width) {
//     return false;
//   }
//   if (word[0] !== currBoard[i][j]) {
//     return false;
//   } else {
//     currBoard[i][j] = " ";
//     word = word.slice(1);
//     return (
//       searchSurround(currBoard, word, i + 1, j) ||
//       searchSurround(currBoard, word, i - 1, j) ||
//       searchSurround(currBoard, word, i, j + 1) ||
//       searchSurround(currBoard, word, i, j - 1)
//     );
//   }
// }

// // TODO: one weird thing, change param in helper affects the one being passed
// function exist(board: string[][], word: string): boolean {
//   const height = board.length;
//   const width = board[0].length;

//   //Convert to uppercases for both board and string:
//   const uppercaseWord = word.toUpperCase();
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       board[i][j] = board[i][j].toUpperCase();
//     }
//   }

//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       const result = searchSurround(board, uppercaseWord, i, j);
//       if (result) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// console.log(
//   exist(
//     [
//       ["C", "A", "A"],
//       ["A", "A", "A"],
//       ["B", "C", "D"],
//     ],
//     "AAB"
//   )
// );
