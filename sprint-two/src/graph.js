

// Instantiate a new graph
var Graph = function() {

  // graph vertex
  // graph edge

  // What data might we want in storage for each new Graph? What properties does graph have?
  // List of nodes, their values, their edges (as many as created)
  // List of edges, their vertices (2 nodes)
  // Do we need to count? Not if there can only be one edge between nodes, not if there can only be one of each node, idk
  this.edges = [];
  this.vertices = [];


};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.vertices.push(node);
  this.edges[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return _.some(this.vertices, function(elem) {
    return elem === node;
  });


};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var index = this.vertices.indexOf(node);

  if (~index) {
    var that = this;

    _.map(that.edges[node], function(elem) {
      var index = that.edges[elem].indexOf(node);
      that.edges[elem].splice(index, 1);
    });

    this.vertices.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return _.some(this.edges[fromNode], function(elem) {
    return elem === toNode;
  });

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var index1 = this.edges[fromNode].indexOf(toNode);
  var index2 = this.edges[toNode].indexOf(fromNode);

  if (~index1) {
    this.edges[fromNode].splice(index1, 1);
    this.edges[toNode].splice(index2, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.forEach(this.vertices, function(elem) {
    cb(elem);
  });
};



// var myGraph = new Graph();
// myGraph('cat');

/*
 * Complexity: What is the time complexity of the above functions?
 */


