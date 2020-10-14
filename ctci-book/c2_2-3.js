/**
 * Chapter 2. delete the middle node - Problem 2.3
 *
 * Remove Middle Node:
 * Write a function that removes the middle node from a singly linked list
 * given a middleNode
 */

/** Initiating linked list test [ 1, 2, 2, 4, 5, 1] -> return [ 1, 2, 4, 5, 1] */

const LinkedList = require("../utilities/LinkedList");
const testArray = [1, 2, 2, 3, 2, 5, 6, 3]

/**
 * 
 * Complexity:
 * Time: O(n log n) - Once to get size, and one half to get the mid point
 * Space: O(1) - making the change in place
 * 
 */


const linkedList = new LinkedList(testArray);
console.log(linkedList.toArray());

function deleteMiddleNode(linkedList) {
  let currentNode = linkedList.head;
  const middlePoint = Math.floor(getLinkedListSize(linkedList) / 2);
  
  for (let i = 1; i <= middlePoint; i++) {
    currentNode = currentNode.next;
  }

  console.log(currentNode.value)
  currentNode.next = currentNode.next.next;

  return linkedList.toArray();
}

function getLinkedListSize(linkedList) {
  let currentNode = linkedList.head;
  let count = 0;

  while (currentNode) {
    count += 1;
    currentNode = currentNode.next;
  }

  return count;
}

console.log(deleteMiddleNode(linkedList));