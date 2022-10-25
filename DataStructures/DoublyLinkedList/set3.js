//Shift/Unshift/insert/Remove
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

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldhead = this.head;
      newNode.next = oldhead;
      oldhead.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let retVal;
    console.log(this.length);
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    } else {
      let middle = Math.floor(this.length / 2);
      let counter;

      if (index < middle) {
        let currhead = this.head.next;
        counter = 1;
        while (currhead != null && counter < middle) {
          if (index === counter) {
            retVal = currhead;
            break;
          }
          currhead = currhead.next;
          counter++;
        }
      } else {
        let currtail = this.tail.previous;
        counter = this.length - 2;
        while (currtail != null && counter >= middle) {
          if (index === counter) {
            retVal = currtail;
            break;
          }
          currtail = currtail.previous;
          counter--;
        }
      }
      return retVal;
    }
  }
  set(index, value) {
    let node = this.get(index);
    if (node == null) {
      return false;
    }
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let nodeItem = this.get(index);
      let previousNode = nodeItem.previous;
      let newNode = new Node(value);
      previousNode.next = newNode;
      newNode.previous = previousNode;
      newNode.next = nodeItem;
      nodeItem.previous = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      this.shift(value);
    } else if (index === this.length) {
      this.pop(value);
    } else {
      let nodeItem = this.get(index);
      let previousNode = nodeItem.previous;
      let nextNode = nodeItem.next;
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
      nodeItem.next = null;
      nodeItem.previous = null;
      this.length--;
    }
    return true;
  }

  reverse() {
    let temp = null,
      current = this.head;

    if (this.length === 1) {
      return this;
    }
    while (current != null) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;
      current = current.previous;
    }

    this.head = temp.previous;
    return this;
  }
}

let DLL = new DoubleLinkedList();
DLL.push(123);
// DLL.push(124);
// DLL.push(125);
// DLL.push(126);

console.log("************************Action");
// console.log(DLL.remove(1));
console.log(DLL.reverse());
