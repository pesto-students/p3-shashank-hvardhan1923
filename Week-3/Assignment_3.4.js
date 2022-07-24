function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    print() {
      console.log(items);
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(1);
stack.push(5);
stack.pop();
stack.print();
console.log(stack.items); // The code has been refactored in such a way that stack can not be modified outside of the function
