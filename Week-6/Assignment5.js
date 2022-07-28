const arr = [5, 10, 3, 50, 80];
//Is there any pairs having difference is equal to given number

const isFoundDifference = (arr, diffToBeFound) => {
  const notFound = arr.every((element) => {
    let absDiff = Math.abs(diffToBeFound - element);
    let isAnotherPairExist = arr.indexOf(absDiff);
    console.log(diffToBeFound, element, absDiff, isAnotherPairExist);
    if (isAnotherPairExist > -1) return false;
    else return true;
  });
  if (!notFound) return 1;
  else return 0;
};
const diffToBeFound = 78;
console.log(isFoundDifference(arr, 78));
