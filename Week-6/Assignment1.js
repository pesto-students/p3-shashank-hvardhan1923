const maxContiguousSum = function () {
  let currSum = arr[0];
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxContiguousSum());
