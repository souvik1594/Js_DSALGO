//Adjacency List Graph
//Undirected Graph

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
  //Not working correctly
  removeEdgeV1(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return "Not Exist";
    }

    var lstFromVertex1 = this.adjacencyList[vertex1];
    var idx1;
    for (let i = 0; i < lstFromVertex1.length; i++) {
      if (lstFromVertex1[i] === vertex2) {
        idx1 = i;
        break;
      }
    }
    console.log(idx1);
    lstFromVertex1.splice(idx1, 1);

    var lstFromVertex2 = this.adjacencyList[vertex2];
    var idx2;
    for (let i = 0; i < lstFromVertex2.length; i++) {
      if (lstFromVertex2[i] === vertex1) {
        idx2 = i;
        break;
      }
    }
    console.log(idx2);
    lstFromVertex2.splice(idx2, 1);
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
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Mumbai");
g.addVertex("Bhilai");
g.addEdge("Bhilai", "Tokyo");
g.addEdge("Bhilai", "Mumbai");
g.addEdge("Tokyo", "Mumbai");
g.removeVertex("Bhilai");
// g.removeEdgeV1("Bhilai", "Tokyo");
// g.removeEdgeV1("Bhilai", "Mumbai");
console.log(g);
