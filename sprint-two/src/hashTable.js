var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // takes the key and transforms it into a hash value given current length
  var index = getIndexBelowMaxForKey(k, this._limit);

  // assign bucket to storage array, based on index for given key
  var bucket = this._storage.get(index);

  // if there is no bucket (bc no index based on key)
  if(!bucket) {
    bucket = [];
    // put a bucket (array) into index of storage array
    this._storage.set(index, bucket);
  }

  bucket = this._storage.get(index);

  // iterate over bucket, check if key exists and overwrite, else push tuple[k,v]

  for (var i = 0; i < bucket.length + 1; i++) {
    if (bucket[i] === undefined) {
      bucket.push([k, v]);
      break;
    }
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      break; // shouldnt exist again
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  // takes the key and transforms it into a hash value
  var index = getIndexBelowMaxForKey(k, this._limit);

  // look up hash value on storage index
  var node = this._storage.get(index);
  // loop through bucket at index
  for (var i = 0; i < node.length; i++) {
    // when key is found
    if (node[i][0] === k) {
      // return value
      return node[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  // takes the key and transforms it into a hash value
  var index = getIndexBelowMaxForKey(k, this._limit);

  // look up hash value on storage index
  var bucket = this._storage.get(index);

  // loop through bucket at index
  for (var i = 0; i <= bucket.length; i++) {
    // when key is found
    if (bucket[i][0] === k) {
      // remove value (splice)
      bucket.splice(i);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: constant
 * retrieve: constant
 * remove: constant
 */


