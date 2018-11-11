var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {};

  stackObj.counter = 0;
  stackObj.storage = {};

  _.extend(stackObj, stackMethods);
  return stackObj;
};

var stackMethods = {
  push: function(value) {
    //What push does, is add to the stackObj.storage, with the this value being the key, and the value being value?
    //Add counter to the object
    //Increment the counter to keep track of the properties
    this.storage[this.counter] = value;
    this.counter++; 
  },
  pop: function () { 
    if (this.counter < 0) {
      return undefined;
    }
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

