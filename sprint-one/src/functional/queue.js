var Queue = function() {
  var someInstance = {};
  var storage = {};
  var head = 0;
  var tail = 0;
  var temp;

  someInstance.enqueue = function(value) {

    storage[tail] = value;
    tail ++;
  };

  someInstance.dequeue = function() {

    if (Object.keys(storage).length === 0) {
      return;
    }

    temp = storage[head];
    delete storage[head];
    head ++;
    return temp;

  };

  someInstance.size = function() {

    return tail - head;
  };

  return someInstance;

};