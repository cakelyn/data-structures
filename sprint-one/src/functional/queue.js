var Queue = function() {
  var someInstance = {};
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value) {

    if (Object.keys(storage).length > 0){
      storage[end + 1] = value;
    } else {
      storage[1] = value;
      start++;
    }
    end++;

  };

  someInstance.dequeue = function() {

    // delete the last property on storage object
    // decrement end
    // end-- unless end === 0

    var temp = storage[start + 1];
    delete storage[start + 1];
    end !== 0 ? end-- : end = 0;
    start ++;
    return temp;
  };

  someInstance.size = function() {
    // size of storage = end - start
    return end - start;
  };

  return someInstance;
};
