/** 
 * Chapter 1. Arrays and Strings - Problem 1.1
 * 
 * Is Unique: 
 * Implement an algorithm to see if a string has all unique characters.
 * -> What if you cannot use additional data structures.
 * 
 */

const array1 = ["a", "b", "c", "d", "e"]; // true
const array2 = ["a", "b", "c", "d", "d"]; // false

/**
 * 
 * Complexity:
 * 
 * Space: O(1)
 * Time: O(n) -> possible that it's O(n log n) since includes might be O(n)
 * 
 */

function isUnique(array) {
  const temp = []
  let result = true;

  array.forEach(char => {
    if (temp.includes(char)) {
      result = false;
    }
    temp.push(char);
  });
  return result;
}

console.log(isUnique(array1));
console.log(isUnique(array2));