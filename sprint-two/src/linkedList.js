var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    var empty = false;
    var prevNode = list.tail;

    list.head === null ? empty = true : empty = false;
    list[node] = node;
    list.tail = list[node];
    empty ? list.head = list[node] : prevNode.next = list[node];
  };

  list.addAnywhere = function (value, target) {
    var node = Node(value);
    var nextTarget;

    list[node] = node;

    for (var key in list) {
      if (list[key].value === target) {
        nextTarget = list[key].next;
        list[key].next = list[node];
        list[node].next = nextTarget;
      }
    }

  };

  list.removeHead = function() {
    var prevHead = list.head;

    list.head = list.head.next;

    return prevHead.value;
  };

  list.contains = function(target) {

    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: constant
 * addAnywhere: constant
 * removeHead: constant
 * contains: linear
 * Node: constant
 */
