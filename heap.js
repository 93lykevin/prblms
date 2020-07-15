class Heap {
  // shitty heap: O(1) to get first element, O(nlogn) to insert
  constructor(startingArr, sortingFunction) {
    this.values = startingArr;
    this.sortingFunction = sortingFunction;
  }

  insert(num) {
    this.values.push(num);
    this.values.sort(this.sortingFunction);
    return this.values;
  }

  peek() {
    return this.values[0];
  }

  pop() {
    return this.values.shift();
  }
}

const minHeap = new Heap([], (a, b) => a - b);
console.log(minHeap.insert(5));
console.log(minHeap.insert(3));
console.log(minHeap.insert(8));
console.log(minHeap.insert(13));
console.log(minHeap.insert(2));
console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.peek());

const maxHeap = new Heap([], (a, b) => b - a);
console.log(maxHeap.insert(10));
console.log(maxHeap.insert(20));
console.log(maxHeap.insert(30));
console.log(maxHeap.insert(40));
console.log(maxHeap.insert(50));
console.log(maxHeap.peek());
console.log(maxHeap.pop());
console.log(maxHeap.peek());

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class minHeap {
  constructor() {
    this.root = null;
  }

  // Insert a node at the first available spot, then bubble it up to where it belongs
  insert(node) {
    if (!this.root) {
      this.root = node;
    } else {
    }
  }
}
