var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.top++] = val;
};

Stack.prototype.pop = function() {
  if (this.top === 0) {
    return;
  }

  this.top--;
  var temp = this.storage[this.top];
  delete this.storage[this.top];

  return temp;
};

Stack.prototype.size = function() {
  return this.top;
};
