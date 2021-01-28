/** Reverse LinkedList */


function reverseList(head) {
  let currNode = head['nodes'][head.head];
  let prevNode = null;
  
  while (currNode) {
    if(currNode === null) break;
    head.head = currNode.id;
    let temp = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode.id;
    currNode = head['nodes'][temp];
  };

  return head;
};


const linkedList = {
  "head": "0",
  "nodes": [
    { "id": "0", "next": "1", "value": 0 },
    { "id": "1", "next": "2", "value": 1 },
    { "id": "2", "next": "3", "value": 2 },
    { "id": "3", "next": "4", "value": 3 },
    { "id": "4", "next": "5", "value": 4 },
    { "id": "5", "next": null, "value": 5 }
  ]
};


reverseList(linkedList);
console.log(linkedList.head);
for (let i of linkedList['nodes']) console.log(i);