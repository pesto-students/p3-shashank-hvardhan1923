const parenthesisCheck = (arrOfString) => {
  const stack = [];

  for (let i = 0; i < arrOfString.length; i++) {
    let toBeCheck = stack[stack.length - 1];
    if (
      arrOfString[i] == "(" ||
      arrOfString[i] == "{" ||
      arrOfString[i] == "["
    ) {
      stack.push(arrOfString[i]);
    } else if (
      (toBeCheck == "(" && arrOfString[i] == ")") ||
      (toBeCheck == "{" && arrOfString[i] == "}") ||
      (toBeCheck == "[" && arrOfString[i] == "]")
    ) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
};
const arrOfString = "[][][{()}]]";
console.log(parenthesisCheck(arrOfString));
