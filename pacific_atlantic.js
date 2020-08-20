// 417. Pacific Atlantic Water Flow
// Medium
// 1310
// 264
// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean"
// touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:
// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.

// Example:
// Given the following 5x5 matrix:
//   Pacific ~   ~   ~   ~   ~
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:
// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

function waterflow(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let pacific = new Array(rows).fill().map(() => new Array(cols));
  let atlantic = new Array(rows).fill().map(() => new Array(cols));

  let res = [];

  // top/bottom
  for (let col = 0; col < cols; col++) {
    dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, rows - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // left/right
  for (let row = 0; row < rows; row++) {
    dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, row, rows - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
        res.push([i, j]);
      }
    }
  }

  return res;
}

function dfs(matrix, row, col, prev, ocean) {
  // Base cases i.e. check the conditions to see if we should keep on DFSing
  if (row < 0 || row > matrix.length - 1) return;
  if (col < 0 || col > matrix[0].length - 1) return;
  if (matrix[row][col] < prev) return;
  if (ocean[row][col] === 1) return;

  // do the thing the DFS is supposed to do
  ocean[row][col] = 1;

  // DFS traversal on all sides
  dfs(matrix, row + 1, col, matrix[row][col], ocean);
  dfs(matrix, row - 1, col, matrix[row][col], ocean);
  dfs(matrix, row, col + 1, matrix[row][col], ocean);
  dfs(matrix, row, col - 1, matrix[row][col], ocean);
}
