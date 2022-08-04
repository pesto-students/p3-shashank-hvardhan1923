const nextGreater = (arr) => {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    while (stack.length) {
      if (arr[i] > stack[stack.length - 1]) {
        console.log(stack.pop(), arr[i]);
      } else break;
    }
    stack.push(arr[i]);
  }

  for (let val of stack) {
    console.log(val, -1);
  }
};

const arr = [1, 2, 0, 3, 5, 3];
nextGreater(arr);
