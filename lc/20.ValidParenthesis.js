/**  LC 20 is Valid Parenthesis */

function isValidParen(s) {
  if (s.length < 2) return false;
  const stack = [];

  for (let i of s) {
    let temp = stack.pop();

    if (temp === '(' && i === ')') continue;
    if (temp === '[' && i === ']') continue;
    if (temp === '{' && i === '}') continue;
    if (temp) stack.push(temp);
    stack.push(i);
  }

  if (stack.length > 0) return false;
  return true;
};

console.log(isValidParen("([]){"));