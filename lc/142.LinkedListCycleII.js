/** Find and return the start of a linkedlist loop */

function findLoop(head) {
  let p1 = head.next;
  let p2 = head.next.next;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next.next;
  };

  p1 = head;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  };

  return p1;
};