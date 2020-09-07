/* Trie Data Structure */

let Node = function() {
  // Key will be equal a new map (es6 map structure)
  this.key = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
