const queueOfTwoStack = (arrOfStack) => {
  const queue = [];
  for (let i = 0; i < arrOfStack.length; ) {
    if (arrOfStack[i] == 1) {
      queue.push(arrOfStack[i + 1]);
      i += 2;
    } else {
      let element = queue.shift();
      if (typeof element === "undefined") console.log(-1);
      else console.log(element);
      i++;
    }
  }
};
queueOfTwoStack([1, 2, 2, 2, 1, 4]);
