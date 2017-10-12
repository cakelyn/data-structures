var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.tail++] = val;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;

    return temp;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};