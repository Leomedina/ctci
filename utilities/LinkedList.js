/** 
 * 
 * Utility LinkedList and Node classes
 *  -> Created for testing functions that require LinkedLists
 * 
 *  */
const LinkedListNode = require("./LinkedListNode");

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;

    if (value) {
      if (Array.isArray(value)) return this.fromArray(value);
      return new TypeError(value + ' is not iterable');
    };

    return this;
  }

  prepend(value) {
    const NewNode = new LinkedListNode(value, this.head);
    if (!this.tail) this.tail = NewNode;

    this.head = NewNode;
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  getSize() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }
  
  toArray(useNodes = false) {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(useNodes ? currentNode : currentNode.value);
      currentNode = currentNode.next;
    };
    return nodes;
  }
}

module.exports = LinkedList;