class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

// this function accepts a Node instance and adds it to the nodes property on the graph
addVertex(vertex) { 
  this.nodes.add(vertex)
}

// this function accepts an array of Node instances and adds them to the nodes property on the graph
addVertices(vertexArray) { 
  let nodeArray = [];
  for (array in nodeArray) {
    this .nodeArray.add.Graph 
}

// this function accepts two vertices and updates their adjacent values to include the other vertex
addEdge(v1, v2) { 
  v1.adjacent.add(v2);
  v2.adjacent.add(v1);
}

// this function accepts two vertices and updates their adjacent values to remove the other vertex
removeEdge(v1, v2) {
  
 }

// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
removeVertex(vertex) { }

  // Follow one path as far as possible before coming back to try another path.
  // Return the value of each Node in the order it was first visited.
  depthFirstSearch(start) {
    const visited = new Set();
    const values = [];

    const visit = (vertex) => {
      visited.add(vertex);
      values.push(vertex.value);

      for (let neighbor of vertex.adjacent) {
        if (!visited.has(neighbor)) {
          visit(neighbor);
        }
      }
    };

    visit(start);
    return values;
  }

  // Visit the starting Node, then its neighbors, then the neighbors' neighbors.
  // The queue keeps Nodes in the order they are waiting to be visited.
  breadthFirstSearch(start) {
    const visited = new Set([start]);
    const queue = [start];
    const values = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      values.push(vertex.value);

      for (let neighbor of vertex.adjacent) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return values;
  }
}

//
let graph = new Graph()
let a = new Node("A")
let b = new Node("B")
let c = new Node("C")
graph.addVertices([a, b])
graph.addVertex(c)
graph.nodes.has(a) // true
graph.nodes.has(b) // true
graph.nodes.has(c) // true

module.exports = { Graph, Node } 
