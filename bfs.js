// 102. Binary Tree Level Order Traversal
// Medium
// 3187
// 78

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

function bfs(root) {
    let queue = [root];
    let res = [];

    while (queue.length) {
        let levelLength = queue.length;
        let level = [];

        for (let i = 0; i < levelLength; i++) {
            let current = queue.shift();
            level.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        res.push(level);
    }

    return res;
}
