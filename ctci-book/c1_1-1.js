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
 * Time: O(n log n) since includes might be O(n)
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

/**
 * 
 * Complexity (better solution):
 * 
 * Space: O(1)
 * Time: O(n) -> rather than looping through temp, you create a hash-map to get O(1) for each look up
 * 
 */

function isUniqueBetter(array) {
  const temp = {}
  let result = true;
  
  array.forEach(char => {
    if (temp[char]) result = false;
    temp[char] = char;
  });
  return result;
}

console.log(isUniqueBetter(array1));
console.log(isUniqueBetter(array2));