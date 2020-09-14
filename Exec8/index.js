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

    if (input.length == 0){
       node.setEnd();
       return;
    
    // If there's more than zero letters that we've passed into this add function, we are not a the end of the word

    // First check if there's already a node with that letter that we're pass.
    // !node.keys.has(input[0]) -> if does not have a letter input zero, meaning with does not have the first letter of the word it will creat the new word     
    } else if (!node.keys.has(input[0])) {
      // The explainaction of the this part it is, that first we gonna create a node with the letter "b", then will created other node to be rest of the letter, and will repeat again the function until the word will be in TRIE.  
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    };
  };


  // Check if the word is in the TRIE
  this.isWord = function(word) {
    let node = this.root;
  
    while (word.length > 1) {

      // check the first charater of the is in th TRIE 
      if (!node.keys.has(word[0])) {
        return false;
      } else {

        // Set the to the first letter of the word that we pass, example we pass "send", and we set the "s" to the node and we set the rest of the "end" to word variable     
  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {

      };
    };
    // if as the last letter of the word that wee pass in and if is the end - "isEnd" -, we return true that is in TRIE

    return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
      true : false;
  };

  this.print = function() {
    let words = new Array();
    let search = function(node, string) {
      if (node.keys.size != 0) {
        
        // for each letter and the keys here, we goona reapte sreach comand again
        for (let letter of node.keys.keys()) {

          // and then we pass the letter, to go to the next, and then e add the same letter to the string    
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


var myTrie = new Trie()


myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print()
