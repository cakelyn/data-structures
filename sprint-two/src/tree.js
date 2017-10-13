var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var child = Tree(value);
  this.children.push(child);

};

treeMethods.contains = function(target) {

  if (this.value === target) {
      return true;
  }

  return _.some(this.children, function(child){
      return child.contains(target);
    });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: constant
 * contains: n^2
 */