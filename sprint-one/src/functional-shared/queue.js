var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  extend(someInstance, queueMethods);

  return someInstance;
};

// extend
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    return this.storage[this.head++];
  }
};

queueMethods.enqueue = function(val) {
  this.storage[this.tail++] = val;
};

queueMethods.size = function() {
  return this.tail - this.head;
};