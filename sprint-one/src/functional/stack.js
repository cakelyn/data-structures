var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[end++] = value;
  };

  someInstance.pop = function() {
    if (end === 0) {
      return;
    } else {
      return storage[--end];
    }
  };

  someInstance.size = function() {
    return end;
  };

  return someInstance;
};
