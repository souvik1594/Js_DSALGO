//Get - Set
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new node("Hi");
// first.next = new node("There");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head == null && this.tail == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (this.head == null) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      let firsttail = this.tail;
      this.tail = null;
      this.length--;
      return firsttail;
    }
    let counter = 1;
    let secondlastItem = this.head;
    while (counter < this.length - 1 && secondlastItem) {
      secondlastItem = secondlastItem.next;
      counter++;
    }
    let lastItem = secondlastItem.next;
    secondlastItem.next = null;
    this.tail = secondlastItem;
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.head == null) {
      return undefined;
    }
    const headval = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return headval;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (this.length === 0 || index >= this.length || index < 0) {
      return null;
    }
    let counter = 0;
    let nodes = this.head;
    while (nodes != null) {
      if (counter === index) {
        break;
      }
      nodes = nodes.next;
      counter++;
    }
    return nodes;
  }

  set(index, val) {
    let item = this.get(index);
    if (item != null) {
      item.val = val;
      return true;
    } else {
      return false;
    }
  }
}

let SLL = new SinglyLinkedList();
SLL.push("31");
SLL.push("32");
SLL.push("33");
SLL.push("34");

console.log(SLL.get(0));
console.log(SLL.set(0, 91));
console.log(SLL.get(0));
