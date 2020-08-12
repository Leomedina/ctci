/** 
 * 
 * Utility LinkedList and Node classes
 *  -> Created for testing functions that require LinkedLists
 * 
 *  */
import LinkedListNode from "./LinkedListNode";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }


}


export default LinkedList;