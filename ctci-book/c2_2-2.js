/**
 * Chapter 2. return kth to last - Problem 2.2
 *
 * Remove Dups:
 * Write a function that removes duplicates from an unsorted *Linked* list.
 * -> How would you solve it without a temporary buffer
 *
 */

/** Initiating linked list test [ 1, 2, 2, 4, 5, 1] -> return kth to last (2) -> [5] */

const LinkedList = require("../utilities/LinkedList");
const testArray = [1, 2, 2, 3, 2, 5, 6, 3]

const linkedList = new LinkedList(testArray);
console.log(linkedList.toArray());

/**
 * 
 * Complexity:
 * 
 * Time: O(n) - only loop once!
 * Space: O(1) - doing it in place baby!
 * 
 */

function getNumFromEnd(linkedList, numFromEnd) {
  if (numFromEnd < 0) return null;

  let currentNode = linkedList.head;
  let currentNodeFromEnd = null;
  let count = 0;

  while (currentNode !== null) {
    if (count <= numFromEnd) currentNodeFromEnd = linkedList.head;
    if (count >= numFromEnd) currentNodeFromEnd = currentNodeFromEnd.next;
    count += 1;
    currentNode = currentNode.next;
  }
  return currentNodeFromEnd;
}

console.log(getNumFromEnd(linkedList, 3))