var Queue = function() {
  var someInstance = {};


  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (object.keys(storage).length > 0){
      storage[end + 1] = value;
    } else {
      storage[1] = value;
    }
    end++;

      // increment end of storag and place value there
  };

  someInstance.dequeue = function() {
    // edit start variable
  };

  someInstance.size = function() {
    // end - start + 1
  };

  return someInstance;
};

var line =  Queue();
link.enqueue("milk");