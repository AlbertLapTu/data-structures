var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(stackMethods);
  newObj.storage = {};
  newObj.counter = 0;

  return newObj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}

stackMethods.pop = function() {
	if (this.counter < 0) {
      return undefined;
    }
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
}

stackMethods.size = function () {
	return Object.keys(this.storage).length;
}






