/** Find max depth of binary tree */

function maxDepth(root, depth = 0) {
  if (!root) return depth;

  const maxLeft = maxDepth(root.left, depth + 1);
  const maxRight = maxDepth(root.right, depth + 1);

  return maxLeft > maxRight ? maxLeft : maxRight;
}