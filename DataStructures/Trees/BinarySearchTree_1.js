//Binary Search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    var pointer = this.root;
    var way;
    while (pointer != null) {
      if (pointer.value === val) {
        return undefined;
      }
      if (pointer.value < val) {
        way = pointer.right;
        if (way != null) {
          pointer = way;
        } else {
          pointer.right = newNode;
          pointer = null;
        }
      } else {
        way = pointer.left;
        console.log(newNode);
        if (way != null) {
          pointer = way;
        } else {
          pointer.left = newNode;
          pointer = null;
        }
      }
    }
    return this;
  }

  find(val) {
    if (this.root == null) {
      return false;
    }
    var pointer = this.root;
    while (pointer != null) {
      if (pointer.value === val) {
        return true;
      }
      if (pointer.value < val) {
        pointer = pointer.right;
      } else if (pointer.value > val) {
        pointer = pointer.left;
      }
    }
    return false;
  }
}

var tree = new BinarySearchTree();
tree.insert(20);
tree.insert(30);
tree.insert(10);
tree.insert(5);

console.log(tree);

console.log(tree.find(200));
