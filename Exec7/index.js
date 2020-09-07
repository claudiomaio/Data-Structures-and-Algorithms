/* Linked List */


function LinkedList() {
  var lenght = 0;
  var head = null;

  // Link list is created by nodes
  var Node = function(element) {

    // Info - in example of notebook part 3      
    this.element = element; 

    // Link - in example of notebook part 3
    this.next = null;
  };

  // Returns the lenght
  this.size = function() {
    return lenght;
  };

  // Returns the head
  this.head = function(){
    return Node;
  };

  // It will add the element to Link List
  this.add = function(element){

    // Creates a new Node in based of value of the element
    var node = new Node(element);

    // If the head is equal to null it means there is no nodes in the linked list
    if(head === null){
      
      // Head is going to equal the node, to be point to first node 
      head = node;
    } else {

      // It means that we are going start at head node, any time you have to do something to link list we nee always to go through each item in the list 
      var currentNode = head;
      
      // While the currentNode.next is not equal null, meaning if exist the next node
      while(currentNode.next){
          currentNode = currentNode.next;
      }

        // set currentNode.next to equal the node, after we get to last node in the list  
        currentNode.next = node;
    }

    lenght ++;
  }; 

  this.remove = function(element){
    var currentNode = head; 
    var previousNode;

    // If the currentNode.element equals element, it means that we whant to remove the head node  
    if (currentNode.element === element){
        
        // it will make the head pointer to point to the next node 
        head = currentNode.next;

    // if is not head node that we whant to remove     
    } else {

      // While the node in link list is not equal to the node that we pass in 
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // Imagine that we whant to remove the second of the example of the notebook part3
      // We are going set the previousNode.next(LINK of the 1º node) equal to the currentNode.next (LINK of the 2º node), to make the link of 1º node pointing the 3º node
      previousNode.next = currentNode.next;
    }
    lenght --;
  };

  // If the return lenght is equal to 0; it will returns true if not it will return false
  this.isEmpty = function() {
    return length === 0;
  };

  // It will give you the index of the especific element   
  this.indexOf = function(element) {
    var currentNode = head;

    // it starts with -1 to get the first node (head node) that is index is 0
    var index = -1;

    while(currentNode){
      index++;
      if(currentNode.element === element){
        return index;
      }
      currentNode = currentNode.next;
    }

    // If returns -1 it means the element is not in the link list
    return -1;
  };

  // It will return to us the currentNode with index that we pass in function
  this.elementAt = function(index) {

    var currentNode = head;
    var count = 0;

    while (count < index ) {
      count ++;
      currentNode = currentNode.next
    }
    return currentNode.element;

  };

  // Add a element in any possition of the Link List
  this.addAt = function(index, element){

    // New element (new Node)
    var node = new Node(element); 

    // Point Current to the head 
    var currentNode = head;

    var previousNode;

    // Index pointed to Head Node 
    var currentIndex = 0;

    // Check if the index that we pass is bigger then length of the Link Lists
    if(index > length){
      return false;
    }

    // If the index is 0, it will add to first possion of the Link List.
    if(index === 0){
      // node.next is gonna the current head node 
      node.next = currentNode;

      // the head node will be the node that we pass
      head = node;
    } else {
      while (currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // Imagine that we whant add node in the possition 1 of the index (2º node ), based on example of notebook part3
      // So the node.next will be the currentNode(2º node the 1º index), then we have to set previousNode.next that will be equal the node thar we are passing in the function      
      node.next = currentNode;
      previousNode.next = node;
    }
    lenght++;
  };

  // Remove a element in any possition of the Link List 
  this.removeAt = function(index) {
    // New element (new Node) 
    var currentNode = head;

    var previousNode;
    
    // Index pointed to Head Node
    var currentIndex = 0;

    // Check if the Index is lower then 0, or with the Index is biger or equal then the lenght of the Link List 
    if ( index < 0 || index >= lenght){
      return null
    }

    // If index that we pass is 0 we going to remove the head node
    if (index === 0){

      // head pointer will point to next node, in the this case 2º node(1º possition of the index)
      head = currentNode.next;
    } else {

      // While the currentIndex is bigger the index that we pass
      while(currentIndex < index) {
        // Incremented the currentIndex
        currentIndex ++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Imagine that we whant to remove the 2º node, base on the example of the notebook 3º part
      // so the link gonna point to next node, it means the link that points to 2º it will point to 3º node
      previousNode.next = currentNode.next
    }
    lenght --;
    return currentNode.element;

  }
  


}

var conga = new LinkedList();

conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());
