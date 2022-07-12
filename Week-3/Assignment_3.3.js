function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    console.log("I am in increment " + count);
  }
  let message = `count is ${count}`;
  console.log(count);
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Here count is 0 becasue message is declared at the time of initializing createIncrement() function
