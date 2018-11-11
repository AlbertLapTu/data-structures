var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.pointer = 0;


  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
	enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
	},
  dequeue: function() {
    if (this.storage === undefined) {
      return undefined;
    }

    var result = this.storage[this.pointer];
    delete this.storage[this.pointer];
    this.pointer++;
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


