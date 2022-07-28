const Fibonacci = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let oldValue = 0,
      new1Value = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [oldValue, new1Value] = [new1Value, oldValue + new1Value || 1];
          return { value: oldValue, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

// console.log([...Fibonacci(8)]);

// console.log(Fibonacci(7));

for (let num of Fibonacci(9)) {
  console.log(num);
}
// console.log(Fibonacci(9));
