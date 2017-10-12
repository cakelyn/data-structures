var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

// create new instance with empty object
// local vars
// extend to methods outside

var someInstance = {};
someInstance.storage = {}; // why need specify storage as prop of instance, whereas in function implementation scope is limiting / not shared?
someInstance.top = 0;
extend(someInstance, stackMethods);
return someInstance;

};

var extend = function(to,from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.top++] = val;
};

stackMethods.pop = function() {
  if (this.top === 0) {
    return;
  } else {
    (this.top)--;
    var temp = this.storage[this.top];
    delete this.storage[this.top];
    return temp;
  }
};

stackMethods.size = function() {
  return this.top;
};





