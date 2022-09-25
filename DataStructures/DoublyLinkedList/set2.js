//Push & Pop
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.head;
    }
    let lastPrev = this.tail.previous;
    let last = this.tail;
    this.tail = lastPrev;
    this.tail.next = null;
    this.length--;
    last.previous = null;
    return last;
  }

  shift() {
    let currhead;
    let nextVal;
    if (this.length === 0 || this.head === null) {
      return null;
    } else if (this.length === 1) {
      currhead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currhead;
    } else {
      currhead = this.head;
      nextVal = this.head.next;
      currhead.next = null;
      nextVal.previous = null;
      this.head = nextVal;
      this.length--;
      return currhead;
    }
  }
}

let DLL = new DoubleLinkedList();
DLL.push(123);
DLL.push(124);
DLL.push(125);
DLL.push(126);

console.log(DLL);

DLL.shift();

console.log("************************Action");
console.log(DLL);
