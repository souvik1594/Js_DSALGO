//Priority Queue using MinHeapBinaryHeap
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentIndex] = element;
      idx = parentIndex;
    }
  }

  dequeue() {
    if (this.values.length === 0) return null;
    var minVal = this.values[0];
    var lastVal = this.values.pop();
    if (this.values.length === 0) return lastVal;
    this.values[0] = lastVal;
    this.sinkDown();
    return minVal;
  }

  sinkDown() {
    let parentIndex = 0;
    let found = false;
    let leftChildIdx;
    let leftChild;
    let rightChildIdx;
    let rightChild;
    let temp;
    let length = this.values.length;
    let swapidx;
    while (!found) {
      swapidx = null;
      leftChildIdx = 2 * parentIndex + 1;
      rightChildIdx = 2 * parentIndex + 2;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (this.values[parentIndex].priority > leftChild.priority) {
          swapidx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapidx === null &&
            this.values[parentIndex].priority > rightChild.priority) ||
          (swapidx !== null && leftChild.priority > rightChild.priority)
        ) {
          swapidx = rightChildIdx;
        }
      }
      if (swapidx == null) {
        found = true;
      } else {
        temp = this.values[swapidx];
        this.values[swapidx] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        parentIndex = swapidx;
      }
    }
  }
}
var ER = new PriorityQueue();
ER.enqueue("Common Cold", 5);
ER.enqueue("Head Injury", 1);
ER.enqueue("Broken Leg", 2);
ER.enqueue("Broken Hnad", 3);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
