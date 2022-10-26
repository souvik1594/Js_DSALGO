//Binary Heaps
//Max Binary Heap
class MaxBinaryheap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    var itemIndex = this.values.length - 1;
    if (itemIndex === 0) {
      return this;
    }
    var found = false;
    var parentIndex;
    while (!found) {
      parentIndex = Math.floor((itemIndex - 1) / 2);
      if (this.values[parentIndex] < val) {
        swap(itemIndex, parentIndex, this.values);
        itemIndex = parentIndex;
      } else {
        found = true;
      }
    }

    function swap(itemIndex, parentIndex, arr) {
      var temp = arr[parentIndex];
      arr[parentIndex] = arr[itemIndex];
      arr[itemIndex] = temp;
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    var maxVal = this.values[0];
    var lastVal = this.values.pop();
    if (this.values.length === 1) return maxVal;
    this.values[0] = lastVal;
    this.sinkDown();
    return maxVal;
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
        if (this.values[parentIndex] < leftChild) {
          swapidx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (this.values[parentIndex] < rightChild && leftChild < rightChild) {
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

var heap = new MaxBinaryheap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.extractMax());
console.log(heap);
