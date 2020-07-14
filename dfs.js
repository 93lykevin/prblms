//   12
//  3  5
//1 2   6

function pathToLeaf(root) {
  let allPaths = [];
  dfs(root, [], allPaths);
  return allPaths;
}

function dfs(node, currentPath, allPaths) {
  if (!node) {
    return;
  }

  currentPath.push(node.val);

  if (!node.left && !node.right) {
    allPaths.push(currentPath);
  }

  dfs(node.left, currentPath, allPaths);
  dfs(node.right, currentPath, allPaths);

  currentPath.pop();
}
