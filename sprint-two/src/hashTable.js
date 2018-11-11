var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);

};

//Big O - O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  
  if (this.storage.get(index) === undefined) {
    this.storage.set(index, [[k,v]]);
  } else {
    this.storage.each(function(element, i, storage) {
      _.each(storage[index], function(node) {
        if (node[0] === k) {
          node[1] = v;
        }
      });
      storage[index].push([k,v])
    });
  }
  //Check if the this.storage[index] is empty
    // When empty, push the tuple ([[k,v]])
  //else 
    //If duplicate key
      //Replace the value
    //else 
      //Push new node into the tuple
};

//Big O - O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var tuple = this.storage.get(index);
  var result;

  _.each(tuple, function(node) {
    if (node[0] === k) {
      result = node[1];
    }
  })
  
  //Iterate over the tuple
    //Check if the tuple[0] === k 
      //Return the v
    // else return undefined

  return result;
  
};


//Big O - O(n)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  var tuple = this.storage.get(index);

  this.storage.each(function(tuple, index, collection) {
    if (collection[index]) {
      _.each(tuple, function(node, dex) {
        if (node[0] === k) {
          tuple.splice(dex, 1);
        }
      })
    }
  })  

  //Iterate over storage using each
    //if the tuple exists
      //iterate through the tuple
        //If the node[0] equals passed in k
          //splice off the node

  
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
