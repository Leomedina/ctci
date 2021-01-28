/**  LC 20 is Valid Parenthesis */

function isValidParen(s) {
  if (s.length < 2) return false;
  const stack = [];

  for (let i of s) {
    let temp = stack.pop();

    if (temp === '(' && i === ')') continue;
    if (temp === '[' && i === ']') continue;
    if (temp === '{' && i === '}') continue;
    if (temp  ) stack.push(temp);
    stack.push(i);
  }

  if (stack.length > 0) return false;
  return true;
};

console.log(isValidParen("([]){"));


// function isValidParen(s) {
//   if (s.length < 2) return false;
//   let i = 0;
//   let j = 1;

//   while (i < s.length) {
//     if (s[i] === '(' && s[j] !== ')') return false;
//     if (s[i] === '[' && s[j] !== ']') return false;
//     if (s[i] === '{' && s[j] !== '}') return false;
//     i = i + 2;
//     j = j + 2;
//   };
//   return true;
// };