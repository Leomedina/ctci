/**
 *
 * Utility Queue using LinkedList Nodes
 *  -> Created for testing functions that require queues
 *
 *  */
const StackQueueNode = require("./StackQueueNode");

class Queue {
  constructor(value) {
    this.head = null;
    this.tail = null;

    if (value) {
      if (Array.isArray(value)) return this.fromArray(value);
      return new TypeError(value + ' is not iterable');
    };

    return this;
  };

  push(value) {
    const newNode = new StackQueueNode(value, this.tail, null);
    if (!this.head) this.head = newNode;

    this.tail = newNode;
    return this;
  };

  pop() {
    let removedNode = this.tail;
    this.tail = this.tail.prev;

    return removedNode;
  };

  peek() {
    return this.tail;
  }

  isEmpty() {
    if (this.head && this.tail) return false;
    return true;
  };

  toArray(useNodes = false) {
    let currentNode = this.head;
    const nodes = [];
    while (currentNode) {
      nodes.push(useNodes ? currentNode : currentNode.value);
      currentNode = currentNode.next;
    };
    return nodes;
  };
}

module.exports = Queue;