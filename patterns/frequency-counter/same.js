/**
 * Write a function called same, which accepts two arrays. It should respond true if every value in the 
 *  first array has it's corresponding squared in the second array.
 */


function same(array, array1) {
  if (array.length !== array1.length) return false;
  const sqCounter = {};

  for (let char of array) {
    char = char ** 2;
    sqCounter[char] = ++sqCounter[char] || 1;
  };

  for (let char of array1) {
    if (!sqCounter[char]) return false;
    sqCounter[char] = --sqCounter[char];
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])) // True
console.log(same([1, 2, 3], [1, 9])) // False
console.log(same([1, 2, 3], [4, 4, 1])) // False