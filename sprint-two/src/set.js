var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item) {
  this.storage.push(item);  
};

// O(n)
setPrototype.contains = function(item) {
  return this.storage.includes(item);
};

// O(n)
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var indexOf = this.storage.indexOf(item);
    this.storage.splice(indexOf, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */