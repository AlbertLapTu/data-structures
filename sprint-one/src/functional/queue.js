var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var pointer = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (storage === undefined) {
      return undefined;
    }

    var result = storage[pointer];
    delete storage[pointer];
    pointer++;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


//Everytime enqueue is called, counter MUST be incremented by 1. 
//Everytime dequeue is called, you need to remove what's 0 at that time.



