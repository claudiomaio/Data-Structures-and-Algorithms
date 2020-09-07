/* Hash Tables */

// Hash Function 
// String - is the the element that we whant to hash
// Max - is the number of buckets that we are using in our hash table to store values
var hash = (string, max) => {
  var hash = 0;
  // It will adding up the character codes for each character in the string and putting into the hash  
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  // Return hash modulos (%) max
  // Explanation - it will divide by the number of buckets and then return the ramainder 
  return hash % max;
}; 


let HashTable = function() {
  
  // Store all the data
  let storage = [];

  // The number of buckets in the array at first 
  const storageLimit = 4;

  // Utility function - to log all itens in the storage
  this.print = function() {
    console.log(storage)
  }

  // It will pass a key and value in this add function 
  this.add = function(key, value) {

    // it will find out the index of the array by running it through the hash function
    var index = hash(key, storageLimit);
    
    // If there's nothing in that index in the storage arry if it's undefined, is going to set the key value pair array    
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    // if it already something in the bucket  
    } else {

      // Set the insert flag to false
      var inserted = false;

      // Then through each index to see if the key already exist  
      for (var i = 0; i < storage[index].legth; i++){
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        } 
      }

      // It push the new item to our storage  Multiple entries into one bucket
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  // Remove the item from the hash table 
  this.remove = function(key) {
    
    // Check the index into hash fuction 
    var index = hash(key, storageLimit);
    
    // if index lenght is equals 1, it means the is only 1 item in that bucket, and the item on that bucket equals the key passed in  
    if (storage[index].length === 1 && storage[index][0][0] === key){
        delete storage[index][i];
    
    // if it is more the 1 item 
    } else {
      for (var i = 0; i < storage[index].legth; i++){
        // For each item in that bucket if the key equals that we passed in  
        if (storage[index][i][0] === key){
            delete storage[index][i];
        }
      }
    }
  };  

  
  this.lookup = function(key) {
    
    // Check the index into hash fuction
    var index = hash(key, storageLimit);

    if(storage[index] === undefined) {
      return undefined;
    } else {
      
      // For each item in that bucket if the key equals that we passed in       
      for (var i = 0; i < storage[index].length; i++){
        if (storage[index][i][0] === key){
          return storage[index][i][1];
        }
      }
    }
  };

};

console.log(hash('beau', 10))

console.log(hash('claudio', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'))
ht.print();