var BinarySearchTree = function(value) {
  var treeInstance = { value: value};
  treeInstance.left = undefined;
  treeInstance.right = undefined;

  extend(treeInstance, BSTmethods);
  return treeInstance;
};


// extend function
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

// methods declaration
var BSTmethods = {};

// insert: which accepts a value and places in the
// tree in the correct position
BSTmethods.insert = function (val) {


  // inner recursive function (root)
    // base case
    // if val is less than current
      // go to left side, if where we are is undefined
        // val is inserted there
      // else set new root
    // else if val is greater than current
      // go to right side, if where we are is undefined
        // val is inserted there
      // else set new root

    // recursive case
    // call function on new root value

    if(!this.value) {
      this.value = val;
    } else {
    var current = this;
    while(current) {
      if (val < current.value) {
        if (current.left === undefined) {
          current.left = { value: val};
          break;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === undefined) {
          current.right = { value: val};
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};

// contains: which accepts a value and returns a boolean
// reflecting whether or not the value is contained in the tree
BSTmethods.contains = function (val) {

  var node = this;
  var found = false;

  var treeTraverse = function (node) {

    if (node.value === val) {
      found = true;
    } else {

      if (val < node.value && node.left !== undefined) {
        node = node.left;
        treeTraverse(node);
      } else if (val > node.value && node.right !== undefined) {
        node = node.right;
        treeTraverse(node);
      }

    }

  };

  treeTraverse(node);
  return found;

};

// depthFirstLog: which accepts a callback and executes
// it on every value contained in the tree
BSTmethods.depthFirstLog = function (callback) {

};

// var myTree = BinarySearchTree(5);
// myTree.insert(8);
// console.log()

/*
 * Complexity: What is the time complexity of the above functions?
 */
