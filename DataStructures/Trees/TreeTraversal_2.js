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
  //Breadth First search
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

  //Depth First search - Preorder - export in list & make the structure back - cloning a structure
  depthFirstsearchPreorder() {
    var visited = [];
    var current = this.root;
    depthTraverse(current);
    function depthTraverse(node) {
      visited.push(node.value);
      if (node.left != null) depthTraverse(node.left);
      if (node.right != null) depthTraverse(node.right);
    }

    return visited;
  }

  //Depth First search - PostOrder - lasr first
  depthFirstsearchPostOrder() {
    var visited = [];
    var current = this.root;
    depthTraverse(current);
    function depthTraverse(node) {
      if (node.left != null) depthTraverse(node.left);
      if (node.right != null) depthTraverse(node.right);
      visited.push(node.value);
    }

    return visited;
  }

  //Depth First search - inOrder - Left First set of al the nodes in order (increasing or decreasing)
  depthFirstsearchInOrder() {
    var visited = [];
    var current = this.root;
    depthTraverse(current);
    function depthTraverse(node) {
      if (node.left != null) depthTraverse(node.left);
      visited.push(node.value);
      if (node.right != null) depthTraverse(node.right);
    }

    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
console.log(tree.depthFirstsearchPostOrder());
