//basics of Dijkstra algo
// The Approach
// 1. Everytime we look to visit a new Node, we pick the node with smallest known distance to visit first
// 2. Once we have moved to the node we are going to visit, we look to each of its neighbours
// 3. For each neighbouring node, we calcualte the distance  by summing the total edges that lead to node we are check from starting node
// 4. If the new total distance to a node is less tha the previous total, we store the new shorter distance for that node
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  shortestPath(startVertex, endvertex) {
    var distance = {};
    var priorityQ = new PriorityQueue();
    var previous = {};
    var smallest;
    var shortestpath = [];
    var key = endvertex;
    for (let currentItem in this.adjacencyList) {
      if (startVertex === currentItem) {
        distance[currentItem] = 0;
        priorityQ.enqueue(currentItem, 0);
      } else {
        distance[currentItem] = Infinity;
        priorityQ.enqueue(currentItem, Infinity);
      }
      previous[currentItem] = null;
    }
    //As long as there is something to visits in priotity Queue
    while (priorityQ.values.length) {
      smallest = priorityQ.dequeue().val;
      if (smallest == endvertex) {
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((neighbour) => {
          var calculatedDistance = neighbour.weight + distance[smallest];
          if (calculatedDistance < distance[neighbour.node]) {
            //updating new smallest distance to neighbour
            distance[neighbour.node] = calculatedDistance;
            previous[neighbour.node] = smallest;
            priorityQ.enqueue(neighbour.node, calculatedDistance);
          }
        });
      }
    }

    while (previous[key] != null) {
      shortestpath.push(key);
      key = previous[key];
    }
    shortestpath.push(startVertex);

    return shortestpath.reverse();
  }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.shortestPath("A", "E"));
