/** Branch Sums */

function branchSums(root) {
  const sums = [];
  sumBranches(root, 0, sums)
  return sums;
};

function sumBranches(node, runningSum, sums) {
  if (!node) return;
  runningSum += node.value;
  if (!node.left && !node.right) {
    sums.push(runningSum);
  }

  sumBranches(node.left, runningSum, sums);
  sumBranches(node.right, runningSum, sums);
  return;
};