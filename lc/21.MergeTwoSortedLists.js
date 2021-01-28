function mergeSortedLists(headOne, headTwo) {
  let l1CurrNode = headOne;
  let l2CurrNode = headTwo;
  let prevNode = null;

  while (l1CurrNode && l2CurrNode) {
    if (l1CurrNode.value < l2CurrNode.value) {
      prevNode = l1CurrNode;
      l1CurrNode = l1CurrNode.next;

    } else {
      if (prevNode) prevNode.next = l2CurrNode;
      prevNode = l2CurrNode;
      l2CurrNode = l2CurrNode.next;
      prevNode.next = l1CurrNode;
    };
  };

  if (!l1CurrNode) prevNode.next = l2CurrNode;
  return headOne.value < headTwo.value ? headOne : headTwo;
};
    