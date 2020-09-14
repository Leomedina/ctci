/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return undefined;
    };

    this.length++;
    this.tail.next = newNode;
    this.tail = newNode;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.tail) this.tail = newNode;

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return undefined;

  }

  /** pop(): return & remove last item. */

  pop() {
    const lastNode = this.tail;
    let currentNode = this.head;

    if (this.length === 1) {
      this.length--;
      this.head = null;
      this.tail = null;
      return lastNode.val;
    };

    while (currentNode.next && currentNode.next !== lastNode) {
      currentNode = currentNode.next;
    };

    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstNode = this.head;
    this.head = firstNode.next;

    if (this.length === 1) {
      this.length--;
      this.head = null;
      this.tail = null;
      return firstNode.val;
    };

    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try {
      if (idx < 0 || idx > this.length) throw new Error("index not valid");
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      };
      return currentNode.val;
    } catch (e) {
      return e;
    };
  };

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try {
      if (idx < 0 || idx > this.length) throw new Error("index not valid");
      let currentNode = this.head;

      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      };

      currentNode.val = val;

      this.length++;
      return currentNode.val;
    } catch (e) {
      return e;
    };
  };

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try {
      if (idx < 0) throw new Error("index not valid");
      let newNode = new Node(val);
      let currentNode = this.head;

      if (idx >= this.length) this.push(val);

      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      };

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
      return undefined;
    } catch (error) {
      return error
    };
  };

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    try {
      if (idx < 0 || idx > this.length) throw new Error("index not valid");
      let currentNode = this.head;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }

      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      };

      currentNode.next = currentNode.next.next;
      this.length--;
      return undefined;
    } catch (error) {
      return error
    };
  };

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    let accum = 0;
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      accum += currentNode.val;
      currentNode = currentNode.next;
    }; 

    return (accum / this.length);
  };
};

module.exports = LinkedList;
