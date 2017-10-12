var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.top = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.top++] = val;
};

stackMethods.pop = function() {
  if (this.top === 0) {
    return;
  }
  this.top--;
  var temp = this.storage[this.top];
  delete this.storage[this.top];
  return temp;
};

stackMethods.size = function() {
  return this.top;
};


