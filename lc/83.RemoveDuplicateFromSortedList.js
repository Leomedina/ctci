/** Remove Duplicate from Sorted List */

function deleteDuplicates(head) {
  let currentNode = linkedList;

  while (currentNode.next) {
    let nextNode = currentNode.next;
    if (currentNode.value === nextNode.value) currentNode.next = nextNode.next;
    else currentNode = currentNode.next
  };

  return linkedList;
};