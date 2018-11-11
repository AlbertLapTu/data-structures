var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;

};

Stack.prototype.pop = function() {
	if (this.counter < 0) {
      return undefined;
    }
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
}

Stack.prototype.push = function(value) {
	this.storage[this.counter] = value;
  this.counter++;
}

Stack.prototype.size = function () {
	return Object.keys(this.storage).length;
}

// var newStack = new Stack();
