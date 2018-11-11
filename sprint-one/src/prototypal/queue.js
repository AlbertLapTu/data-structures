var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(queueMethods);

  newObj.storage = {};
  newObj.counter = 0;
  newObj.pointer = 0;

  return newObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.counter] = value;
  this.counter++;
}

queueMethods.dequeue = function() {
	if (this.storage === undefined) {
      return undefined;
    }

    var result = this.storage[this.pointer];
    delete this.storage[this.pointer];
    this.pointer++;
    return result;
}

queueMethods.size = function() {
	return Object.keys(this.storage).length;
}
