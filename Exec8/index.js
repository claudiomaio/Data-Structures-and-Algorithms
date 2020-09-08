/* Trie Data Structure */

let Node = function() {
  
  // Key will be equal a new map (es6 map structure)
  this.keys = new Map();

  // In the examples of the notebook part3, the nodes with start, as the end set to true and the others that dont have the star it will have end equal to false 
  this.end = false;  

  this.setEnd = function() {
    this.end = true;
  };

  this.isEnd = function() {
    return this.end;
  };
};



let Trie = function() {
  
  this.root = new Node();

  // It will add input(entire word), and then we pass the node or the root, meaning if we pass the the node it will use't otherwise it will use the root node 
  this.add = function(input, node = this.root) {
    
    // If we are at the en of the word that we passed in, it will set the end in the node 
    if (input.lenght == 0){
       node.setEnd();
       return;
    
    // If there's more than zero letters that we've passed into this add function, we are not a the end of the word
    // First check if there's already a node with that letter that we're pass 
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    };
  };

  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      };
    };
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
      true : false;
  };

  this.print = function() {
    let words = new Array();
    let search = function(node = this.root, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        };
        if (node.isEnd()) {
          words.push(string);
        };
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      };
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };

};

myTrie = new Trie();

myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())

