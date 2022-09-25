//piece of data - val
//reference to next node - next

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
}

let SLL = new SinglyLinkedList();
SLL.push("31");

SLL.push("32");

SLL.push("33");
SLL.push("34");
console.log(SLL);
