class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
  	this.storage = {};
  	this.counter = 0;
    }

  pop() {
  	if (this.counter < 0) {
      return undefined;
    }
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  }

  push(value) {
  	this.storage[this.counter] = value;
  	this.counter++;
  }

  size() {
  	return Object.keys(this.storage).length;
  }	

}