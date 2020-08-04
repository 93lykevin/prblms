// 79. Word Search
// Medium

// 4031

// 194
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

function wordSearch(board, word) {
  if (!board) return false;
  if (!word) return true;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let seen = {};
      if (search(board, word, i, j, seen)) {
        return true;
      }
    }
  }
}

function search(board, word, row, col, seen) {
  // base case, if I have seen the entire word, then return true
  if (!word) return true;

  // if I have already used this position, return false;
  if (seen[`${row},${col}`]) return false;

  // if the current letter isn't correct, return false;
  if (board[row][col] !== word[0]) return false;

  // if I am out of bounds, return false;
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
    return false;

  // mark the current grid position as true;
  seen[`${row},${col}`] = true;

  // recursively look at all other positions around me, and if any of them return true, that means i've found the entire word and can return true
  if (search(board, word.slice(1), row + 1, col, seen)) return true;
  if (search(board, word.slice(1), row - 1, col, seen)) return true;
  if (search(board, word.slice(1), row, col + 1, seen)) return true;
  if (search(board, word.slice(1), row, col - 1, seen)) return true;

  // otherwise backtrack
  seen[`${row},${col}`] = false;
}
