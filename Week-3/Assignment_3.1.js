function add(a, b) {
  return a + b;
}

function memoize(fnc) {
  const caches = new Map();
  console.log(caches);
  return function (...args) {
    if (args.length == 1) return args[0];
    let key = args.toString();
    let swapKeys = args[1].toString() + "," + args[0].toString();
    if (caches.has(swapKeys)) {
      return caches.get(swapKeys);
    } else if (caches.has(key)) {
      return caches.get(key);
    }
    caches.set(key, fnc(...args));
    return caches.get(key);
  };
}

const sumM = memoize(add);

console.log(sumM(2, 3));
console.log(sumM(9, 3));
console.log(sumM(10));
console.log(sumM(10, 3));
console.log(sumM(3, 10));
console.log(sumM(9, 3));
console.log(sumM(3, 2));
