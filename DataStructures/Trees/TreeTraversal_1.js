//Visit every node once
//Breadth First search
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

  breadthFirstSearch() {
    if (this.root == null) return [];
    var queue = [];
    var visited = [];
    var checked;
    queue.push(this.root);

    while (queue.length !== 0) {
      checked = queue.shift();
      visited.push(checked.value);
      if (checked.left != null) {
        queue.push(checked.left);
      }
      if (checked.right != null) {
        queue.push(checked.right);
      }
    }
    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(20);
tree.insert(30);
tree.insert(10);
tree.insert(5);

console.log(tree);
console.log(tree.breadthFirstSearch());
