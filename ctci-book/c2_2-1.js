/**
 * Chapter 2. LinkedLists - Problem 2.1
 *
 * Remove Dups:
 * Write a function that removes duplicates from an unsorted *Linked* list.
 * -> How would you solve it without a temporary buffer
 *
 */
import LinkedList from "../utilities/LinkedList";



function removeDups(linkedList) {
  return null;
}







console.log(removeDups());
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

