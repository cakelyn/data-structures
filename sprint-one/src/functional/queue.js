var Queue = function() {
  var someInstance = {};
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value) {

    if (object.keys(storage).length > 0){
      storage[end + 1] = value;
    } else {
      storage[1] = value;
    }
    end++;

  };

  someInstance.dequeue = function() {

    // delete the last property on storage object
    // decrement end

    delete storage[end];
    end--;
  };

  someInstance.size = function() {
    // console.log? return variable?
    // size of storage = end - start
    return end - start;
  };

  return someInstance;
};

var line =  Queue();
link.enqueue("milk");
link.dequeue();