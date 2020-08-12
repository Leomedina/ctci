/**
 * Chapter 2. LinkedLists - Problem 2.1
 *
 * Remove Dups:
 * Write a function that removes duplicates from an unsorted *Linked* list.
 * -> How would you solve it without a temporary buffer
 *
 */

/** Initiating linked list test [ 1, 2, 3, 2, 4, 5, 1] -> removeDups -> [ 1, 2, 3, 4, 5] */

const LinkedList = require("../utilities/LinkedList");

const linkedList = new LinkedList([1, 2, 3, 2, 4, 5, 1]); // values are converted to a linked list

function removeDups(linkedList) {
  let currentNode = linkedList.head

  return currentNode;
}

console.log(removeDups(linkedList));


// /**
//  * 
//  * Bad Solution - it's doubly bad since it's an implementation for a list and not a LinkedList
//  * 
//  * Complexity:
//  * time = O(n ^ 2) - looping through the entire array at least twice 
//  * space = O(n ^ 3) - not great since I'm adding 2 buffers.
//  *
//  */

// const testArr = [1, 2, 2, 3, 2, 5, 6, 1];

// function removeDups(array) {
//   const buffer = {};
//   const retArr = [];

//   for (const num of array) {
//     if (!buffer[num]) buffer[num] = num;
//   }

//   for (const key in buffer) {
//     retArr.push(key);
//   }

//   return retArr;
// }

// function removeDupsBetter(array) {

// }

