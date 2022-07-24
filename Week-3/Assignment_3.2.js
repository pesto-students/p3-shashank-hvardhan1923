//--------------------------------Bind function-----------------------------

function sum(a, b) {
  return this.a + this.b;
}

let sumA = sum.bind({ a: 10, b: 20 });
console.log(sumA(2, 3));
//-------------------------------------------------------------------------

//-------------------------------.call function------------------------------
function multiply(a, b) {
  return this.a * this.b;
}

const oddObject = {
  a: 1,
  b: 19,
};
const evenObject = {
  a: 2,
  b: 20,
};
console.log(multiply.call(oddObject));
console.log(multiply.call(evenObject));
//-----------------------------------------------------------------------------

//---------------------------------------.apply function---------------------------
// We use .apply() when we have to use array as positional argument at run time having length is not defined.
let numbers = [2, 3, 5, 6, 7, 8, 9];
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));
