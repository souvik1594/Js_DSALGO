//Adjacency List Graph
//Undirected Graph
//breadthFirst Search of graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = [];
    return this;
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = [];
    }
    if (!this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = [];
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return "Not Exist";
    }
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => {
      return item !== vertex2;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => {
      return item !== vertex1;
    });
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return "Not Exist";
    }
    while (this.adjacencyList[vertex].length != 0) {
      let popedElement = this.adjacencyList[vertex].pop();
      this.removeEdge(popedElement, vertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
  depthFirstRecusive(vertex) {
    var visited = {};
    var retlist = [];
    const adjacencyList = this.adjacencyList;

    function depthRecursive(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      retlist.push(vertex);
      adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
          return depthRecursive(element);
        }
      });
    }
    depthRecursive(vertex);
    return retlist;
  }
  depthFirstIterative(start) {
    var iteratedList = [];
    var visited = {};
    var retlist = [];
    iteratedList.push(start);
    visited[start] = true;
    var adjacencyList = this.adjacencyList;
    var popped;
    while (iteratedList.length != 0) {
      popped = iteratedList.pop();
      retlist.push(popped);
      adjacencyList[popped].forEach((element) => {
        if (!visited[element]) {
          iteratedList.push(element);
          visited[element] = true;
        }
      });
    }
    return retlist;
  }

  breadthFirst(start) {
    var iteratedList = [];
    var visited = {};
    var retlist = [];
    iteratedList.push(start);
    visited[start] = true;
    var adjacencyList = this.adjacencyList;
    var popped;
    while (iteratedList.length != 0) {
      popped = iteratedList.shift();
      retlist.push(popped);
      adjacencyList[popped].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          iteratedList.push(element);
        }
      });
    }
    return retlist;
  }
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Mumbai");
g.addVertex("Bhilai");
g.addEdge("Bhilai", "Tokyo");
g.addEdge("Bhilai", "Mumbai");
g.addEdge("Tokyo", "Mumbai");
// g.removeEdgeV1("Bhilai", "Tokyo");
// g.removeEdgeV1("Bhilai", "Mumbai");
console.log(g.breadthFirst("Bhilai"));
