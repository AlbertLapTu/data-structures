// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

//Big O Notation: O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  //Creates a new node within the storage object
  this.storage[node] = {
    "value": node,
    "edge": []
  };
};


//Big O notation: O(n) 
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //If the storage object does not contain any nodes, return false
  if (Object.keys(this.storage).length === 0) {
    return false; 
  }
  //Loop over of the objects, and if the key equals to the node being passed in:
    //Return true if the key exists
    //Return false if not
  for (var key in this.storage) {
    if (parseInt(key) === node) {
      return true;
    } else {
      return false;
    }
  }
};

//Big O notation: O(n)
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = []; //Initializing to maintain hold on deleted edges
  //Initializing deletedKey as we want to return value after deletion
  var deletedKey; 
  //Loop over the nodes, and see if the current key matches the node parameter to be deleted
  for (var key in this.storage) {
    if (parseInt(key) === node) {
      deletedKey = parseInt(key);
      edges = this.storage[key].edge; //Reassign edges to maintain access to the key fromNode/toNode pointers
      delete this.storage[key];
      return deletedKey;
    }
  }
  //Removing a one-sided node
  for (var i = 0; i < edges.length; i++) {
    var index = this.storage[i].edge.indexOf(node);
    this.storage[i].edge.splice(index, 1); 
  }
};

//Big O notation: O(1)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //If any of the nodes within the lookup don't exist, by default there is no edge
  if ((this.storage[toNode] === undefined) || (this.storage[fromNode] === undefined)) {
    return false;
  } else {
  //Both edges must exist (two-way relationship) in order for hasEdge to return true;;;
    return ((this.storage[fromNode].edge.includes(toNode)) && (this.storage[toNode].edge.includes(fromNode)));
  }
};

//Big O notation: O(1)
// Connects two nodes in a graph by adding an edge between them.

//Push the edge key values into the edge array to point to each other
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);

};


//Big O notation: O(n)
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeToNode = this.storage[toNode].edge;
  var edgeFromNode = this.storage[fromNode].edge;
  
  if (edgeFromNode.includes(toNode)) {
    //Return the index from where the node exists
    var index = edgeFromNode.indexOf(toNode);
    edgeFromNode.splice(index, 1);
  }

  if (edgeToNode.includes(fromNode)) {
    //Return the index from where the node exists
    var index = edgeToNode.indexOf(fromNode);
    edgeToNode.splice(index, 1);
  }

};


//Big O notation: O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
