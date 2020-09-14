/** Node: node for a stack. */

const { removeTypeDuplicates } = require("@babel/types");

class Node {
  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return undefined
    }

    this.first = newNode;
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Stack is empty");
    const removed = this.first;
    this.size--;
    if (this.first == this.last) {
      this.last = null;
    }
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !(this.size > 0);
  }
}

module.exports = Stack;
