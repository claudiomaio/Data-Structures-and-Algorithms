/* Binary Search Tree */


// Node Class - represents each node in the tree
class Node {
  constructor(data, left = null, right = null){
    // There's three data properties
    
    // Data that will trying to store 
    this.data = data;

    // Point to left node
    this.left = left;

    // Point to right node
    this.right = right;
  }
}


// Bianary Search Tree Class
class BST{

  // The constructor just creates the root node
  // Top of tree
  constructor() {
    this.root = null;
  }

  // Add function 
  add(data) {
    // Get a reference to the root node
    const node = this.root;
    // If it is the frist node it will be null in that case
    if (node === null) {
      
      // Create a node base on the data
      this.root = new Node(data);
      return;

      // If not the first node, to put in place the new node on tree, it will use a Recursive function, that which is search tree.  
    } else {

      // it will pass in the node which starts off as a root node 
      const searchTree = function(node){
        // if the data that it will pass is less than node data it will put the node in left side of the tree
        if (data < node.data){
      
          // if the left node is equal a null it will create the left node based on the data
          if (node.left === null){
            node.left = new Node(data);
            return;
      
            // if left node is not null, we going to sreach in the tree to find where to put node base on data of the left node, that means it will start again the method searchTree  
          }else if (node.left !== null){
            return searchTree(node.left);
          
          }
          // if the data is more then node data it will put the node in right side  
        }else if (data > node.data) {

          // If node right is equal to null it will put in right side  
          if (node.right === null){
            
            // Assign the right node to the new node data
            node.right = new Node(data);
            return;
            
            // If the right node is not equal null it keep sreaching  and give the right node data
          }else if (node.right !== null){
            return searchTree(node.right);
          }
      
          // If tit cant find a place to put the node it will return null  
        } else {
          return null;
        }
      
      };
      
      return searchTree(node);
    }
  
  }

  // Find min of the array
  // Is all ready known that the min is on left
  findMin() {
    let current = this.root;

    // It will keep the last data until current left is null   
    while(current.left !== null){
      current = current.left; 
    }

    return current.data; 
  }

  // Find min of the array
  // Is all ready known that the max is on right
  findMax() {

    // It will keep the last data until current right is null
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
  
  // The find function is very similiar to isPresent function
  // Find it will return the Node
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      
      if (data < current.data) {
        current = current.left;

      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // This function it will return true or false whether the data is in the tree
  isPresent(data) {
    let current = this.root;

    // whille current is not null
    while (current) {
      
      if (data === current.data) {

        return true;
      }
      
      if (data < current.data){
        
        current = current.left;
      
      } else {
        
        current = current.right;
      }
    }

    return false;
  }

  remove(data) {
    const removeNode = function(node, data){
      

      // Check if it is empty tree 
      if (node == null) {
        return null;
      }

      if (data == node.data) {
        //node has no children
        // setting the REFERENCE to the node to null
        if (node.left == null && node.right == null){
          return null;
        }
        // node has no left child
        // If there is no node in the left side it will replace for right node value
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        // If there is no node in the right side it will replace for left node value
        if (node.right == null){
          return node.left;
        }
        // node has two children explanation on note book - Part 3
        
        // We created a temporary node with the value 
        var tempNode = node.right;

        // It will find the last left node, meaning that will have lowest value of that root
        while (tempNode.left !== null){
          tempNode = tempNode.left;
        }

        // It will the exchange the data to the last left node 
        node.data = tempNode.data;

        // It call the function again to put the right nodes in the correct position 
        node.right = removeNode(node.right, tempNode.data);
        return node;

      }else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);

  }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));

