var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.pointer = 0;

};

Queue.prototype.enqueue = function(value) {
	this.storage[this.counter] = value;
  this.counter++;
}

Queue.prototype.dequeue = function() {
	if (this.storage === undefined) {
      return undefined;
    }

    var result = this.storage[this.pointer];
    delete this.storage[this.pointer];
    this.pointer++;
    return result;
}

Queue.prototype.size = function () {
	return Object.keys(this.storage).length;
}

