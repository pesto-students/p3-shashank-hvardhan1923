const minValAndIndex = (arr) => {
  const minVal = arr.reduce((a, e) => Math.min(a, e));
  const minIndex = arr.indexOf(minVal);
  return [minVal, minIndex];
};

const findProfitAfterSell = (arr) => {
  let min = 0;
  let minIndex = 0;
  let maxVal = 0;
  [min, minIndex] = minValAndIndex(arr);
  //   console.log(min, minIndex);
  if (minIndex === arr.length - 1) return 0;
  else {
    maxVal = arr.slice(minIndex, arr.length).reduce((a, e) => {
      //   console.log(a, e);
      return Math.max(a, e);
    }, arr[minIndex]);
  }
  return maxVal - min;
};

const arr = [4, 7, 2, 8, 1, 2, 9, 1];
console.log(findProfitAfterSell(arr));
