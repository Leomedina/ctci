/**
 * Delete the middle node 
 *
 * Remove Middle Node:
 * Write a function that removes the middle node from a singly linked list given the middle node
 *
 */

/** Initiating linked list test [ 1, 2, 2, 4, 5, 1] -> return [ 1, 2, 4, 5, 1] */

const LinkedList = require("../utilities/LinkedList");
const testArray = [1, 2, 2, 3, 2, 5, 6, 3]

const linkedList = new LinkedList(testArray);
const middleNode = linkedList.getMiddleNode();

/**
 * 
 * Complexity:
 * Time: O(log n) - since we're looping once in half to get the mid point
 * Space: O(1) - making the change in place
 * 
 */

function deleteMiddleNode(middleNode) {
  let currentNode = linkedList.head;

  while (currentNode.next !== middleNode) {
    currentNode = currentNode.next;
  }

  currentNode.next = middleNode.next;
  return linkedList.toArray();
}


console.log(deleteMiddleNode(middleNode));