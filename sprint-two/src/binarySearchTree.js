var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  
  binarySearchTree.value = value; 
  binarySearchTree.left = null;
  binarySearchTree.right = null; 

  binarySearchTree.insert = function(value) {
    //Insert instance of new node into binarySearchTree obj
    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }; 

  binarySearchTree.contains = function(value) {
    if (value === this.value) {
      return true; 
    } else {
      if (value > this.value) {
        if (this.right === null) {
          return false; 
        } else {
          return this.right.contains(value);
        }
      } else {
        if (value < this.value) {
          if (this.left === null) {
            return false; 
          } else {
            return this.left.contains(value);
          }
        }
      }
    }
  } 

  binarySearchTree.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }  
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  } 

  return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */