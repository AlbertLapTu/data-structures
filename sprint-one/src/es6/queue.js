class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
  	this.storage = {};
  	this.counter = 0;
  	this.pointer = 0;
  }

  dequeue() {
  	if (this.storage === undefined) {
      return undefined;
    }

    var result = this.storage[this.pointer];
    delete this.storage[this.pointer];
    this.pointer++;
    return result;
  }

  enqueue(value) {
  	this.storage[this.counter] = value;
  	this.counter++;
  }

  size() {
  	return Object.keys(this.storage).length;
  }

}





