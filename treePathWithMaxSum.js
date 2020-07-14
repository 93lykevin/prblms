function maxSumTreePath(node, currentSum, maxSum) {
  if (!node) {
    return;
  }

  currentSum += node.val;

  if (currentSum > maxSum && !node.left && !node.right) {
    maxSum = currentSum;
  }

  maxSumTreePath(node.left, currentSum, maxSum);
  maxSumTreePath(node.right, currentSum, maxSum);

  currentSum -= node.value;

  return maxSum;
}

maxSumTreePath(1, 0, 0);
//      1
//    3   4
//   1 2   3
