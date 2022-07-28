const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var spiralOrder = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dir = 0;
  let top = 0;
  let down = n - 1;
  let left = 0;
  let right = m - 1;
  let res = [];

  while (top <= down && left <= right) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      dir = (dir + 1) % 4;
      top++;
    } else if (dir == 1) {
      for (let i = top; i <= down; i++) {
        res.push(matrix[i][right]);
      }
      dir = (dir + 1) % 4;
      right--;
    } else if (dir == 2) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[down][i]);
      }
      dir = (dir + 1) % 4;
      down--;
    } else {
      for (let i = down; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      dir = (dir + 1) % 4;
      left++;
    }
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
