/** 
 * 
 * Utility LinkedList and Node classes
 *  -> Created for testing functions that require LinkedLists
 * 
 *  */

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

module.exports = LinkedListNode;