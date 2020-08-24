var letters = [] // tis is our stack

var word = "freeCodeCamp"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

// pop of the stack in reverse order

for (var i = 0; i < word.length; i++){
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a polindrome");
} else {
  console.log(word + " is not polindrome.");
}

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value on to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0){
      return undefined;
    }
  
    // Will dcrement the count and delete the item and return last item back
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  
  // Returns of item is the stack 
  this.size = function() {
    return this.count;
  }
 
  // Return the value at the end of the stack
  // When peekin you do not want to pass in the value
  this.peek = function() {
    return this.storage[this.count-1];
  }

}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());