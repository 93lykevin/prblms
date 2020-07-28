// [
//  [1,2,3]       [7,4,1]
//  [4,5,6] == >  [8,5,2]
//  [7,8,9]       [9,6,3]
// ]

const rotateMatrix = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    // 0
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // 1
      let temp = matrix[n - j - 1][i]; // 13
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
