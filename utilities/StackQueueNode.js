/** 
 * 
 * Utility LinkedList and Node classes
 *  -> Created for testing functions that require LinkedLists
 * 
 *  */

class StackQueueNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

module.exports = StackQueueNode;