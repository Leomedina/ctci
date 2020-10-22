/**
 * 
 * 141. Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 *  by continuously following the next pointer. Internally, pos is used to denote the index of the node 
 *  that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * 
 */

/**
 * @param {Node} head
 * @return {boolean}
*/

function hasCycle(head) {
  if (head === null || head.next === null || head.next.next === null) return false;

  let pointerOne = head;
  let pointerTwo = head.next.next;

  while (pointerOne !== pointerTwo) {
    if (!pointerTwo ||
      !pointerTwo.next ||
      !pointerTwo.next.next) return false;
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next.next;
  }
  return true;
};