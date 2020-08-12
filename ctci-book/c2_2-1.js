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

const testArr = [1, 2, 2, 3, 2, 5, 6, 3];
const linkedList = new LinkedList(testArr); // values are converted to a linked list
console.log(linkedList.toArray());
console.log(removeDupsFromArray(testArr));

/**
 * 
 * Complexity:
 * Time = O(n) - Since we're only traversing the linked list once
 * Space = O(n ^ 2) - I think? since we have a buffer
 * 
 */

function removeDups(linkedList) {
  let currentNode = linkedList.head;
  let prevNode = linkedList.head;
  let buffer = {}

  while (currentNode) {
    if (!buffer[currentNode.value]) {
      buffer[currentNode.value] = currentNode.value;
    } else {
      prevNode.next = currentNode.next;
      currentNode = prevNode;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return linkedList.toArray();
}

console.log(removeDups(linkedList));

/**
 * 
 * Bad Solution - it's doubly bad since it's an implementation for a list and not a LinkedList
 * -> good for double checking the removeDups functions
 * 
 * Complexity:
 * time = O(n ^ 2) - looping through the entire array at least twice 
 * space = O(n ^ 3) - not great since I'm adding 2 buffers.
 *
 */


function removeDupsFromArray(array) {
  const buffer = {};
  const retArr = [];

  for (const num of array) {
    if (!buffer[num]) buffer[num] = num;
  }

  for (const key in buffer) {
    retArr.push(key);
  }

  return retArr;
}