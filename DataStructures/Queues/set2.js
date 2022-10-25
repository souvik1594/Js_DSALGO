//using linked list for queue
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //add to the very end
  enqueue(val) {
    var newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this.size;
  }
  //remove from the begining
  dequeue() {
    var temp = this.head;
    if (this.head == this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;

    this.size--;
    return temp.val;
  }
}

var q = new Queue();
q.enqueue(123);
q.enqueue(124);
q.enqueue(152);
q.enqueue(163);
console.log(q);
q.dequeue();
console.log(q);
