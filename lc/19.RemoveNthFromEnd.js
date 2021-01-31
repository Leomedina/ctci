/** Remove Nth/Kth node from the end */

function removeNthFromEnd(head, k) {
  let currentNode = head;
  let kFromEnd = head;
  let count = 1;

  while (currentNode.next) {
    if (count > k) kFromEnd = kFromEnd.next;
    count += 1;
    currentNode = currentNode.next;
  };


  if (count <= k) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else kFromEnd.next = kFromEnd.next.next;

  return head;
};