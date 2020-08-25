/* Queues */

function Queue(){
  collection = [];

  this.print = function(){
    console.log(collection);
  };

  this.enqueue = function(element) {
    collection.push(element);
  };

  this.dequeue = function() {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
console.log(q.isEmpty());


/* Priority Queue */
// Priority Queue not only do you pass the element into the queue you als pass the priority of the element
function PriorityQueue (){
  var collection = [];

  // Give us the collection 
  this.printCollection = function(){
    (console.log(collection));

  };

  this.enqueue = function(element){

    // 1º Check if the queue is empty
    if (this.isEmpty()){
      collection.push(element);
    } 
    
    // Not empty it will check the priorities, to where to put the element on 
    else {
      var added = false;
      // It goona run all elements one by one 
      for (var i=0; i < collection.length; i++){
        
        // Check is the element index one (priority) is less then the priority of the item in collection that we are checking 
        // collection[i][1] -> [i] - item of the collection
        //                     [1] - index one of the priority


        if (element[1] < collection[i][1]){
          collection.splice(i,0,element);
          added = true;
          // break the loop
          break;
        }
      
      }
      if (!added){
        collection.push(element);
      }
    
    }
  
  };


  this.dequeue = function(){
    var value = collection.shift();
    return value[0];
  }


  this.front = function() {
    var value = collection.shift;
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return (collection.length === 0);
  };
}