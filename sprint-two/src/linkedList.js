var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.current = null;

// O(n)
  list.addToTail = function(value) {
    this.current = this.head; //Sets current to head
    var newNode = new Node(value); 
    if (!this.head) { //Check if head is null
      this.head = newNode; //If null, set head as the new node
      this.tail = this.head;
      this.current = this.head;
    } else {
      //If head is not null 
      this.current.next = newNode; //Set current to next node
      this.tail = this.current.next; //Sets tail to this current nodes 
      this.current = this.current.next;
    }
  };
// O(1)
  list.removeHead = function() {
    // debugger;
    var removedValue = this.current.value;
    this.head = this.current;
    return removedValue;  
    // Returning value that we delete  
  };

// O(n)
  list.contains = function(target) {
    if (this.head.value === target) {
      return true;
    } else {
      if (this.current.next !== null) {
        this.current = this.current.next;
        return this.contains()
      } else if (this.current.next === null && this.current.value !== target){
        return false;
      } else {
        return true;
      }
    }

    };

  return list;
};



var Node = function(value) {
  var node = {};
  
 
  node.value = value;
  node.next = null;

  return node;
};
 

/*
 * Complexity: What is the time complexity of the above functions? 
 */
