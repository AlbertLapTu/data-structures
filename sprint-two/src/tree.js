var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	this.children.push(newChild);
};

treeMethods.contains = function(target) {

  //Solve for the simplest case
  var result = false;
  if (this.value === target) {
    return true;
  }

  //Helper function to check if a childArr exists
  var hasChildren = function(childArr) {
    //Loop over each element 
    for (var i = 0; i < childArr.length; i++) {
      if (childArr[i].value === target) {
        result = true;
      }
      if (childArr[i].children) {
        hasChildren(childArr[i].children)
      }
    }
  }
    hasChildren(this.children)
    return result;
};


/*
 * Complexity: What is the time complexity of the above functions?

 */
