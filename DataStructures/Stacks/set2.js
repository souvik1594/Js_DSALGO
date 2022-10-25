class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
    }
    return this.size;
  }

  pop() {
    if (this.first == null) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);
console.log(stack.pop());
