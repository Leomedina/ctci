/**
 * Chapter 1. Arrays and Strings - Problem 1.2
 *
 * Check Permutation:
 * Given two strings, write a method to decide if one is a permutation of the other.
 * 
 */


 /**
  * 
  * Complexity:
  * space = O(n log n) - I think? largely because I'm doubling the size?
  * time = O(n) - since I've sorted them, I only have to loop once
  * 
  */

const stringOne = "hello world"
const stringTwo = "hello"
const stringThree = "tard hello"
const stringFour = "world hello"

function isPermutation(base, checkString) {
  if (base.length !== checkString.length) return false;

  const baseSanitized = sortArray(base.toLowerCase().split(""));
  const checkStringSanitized = sortArray(checkString.toLowerCase().split(""));
  let result = true;

  for (let i = 0; i < base.length; i++) {
    if(baseSanitized[i] !== checkStringSanitized[i]){
      result = false;
    }
  }
  return result
}

function sortArray(array) {
  array.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return array;
}

console.log(isPermutation(stringOne, stringTwo)); // false
console.log(isPermutation(stringOne, stringThree)); // false
console.log(isPermutation(stringOne, stringFour));//false