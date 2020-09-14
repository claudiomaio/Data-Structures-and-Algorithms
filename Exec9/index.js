/* Binary HEAP  */ 

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function() {
  
  // Creat a Heap, with array that as the index 0 as null  
  let heap = [null]; 

  this.insert = function(num) {
    
    // It will push the number that we pass to end of the Heap
    heap.push(num);

    // If it as more then one item on the Heap
    if (heap.length > 2) {
      
      // Finding the last item of the Heap
      let idx = heap.length - 1;

      // It will compare last index of the heap if is less than the equation to find the parent  
      while (heap[idx] < heap[Math.floor(idx/2)]){
        if (idx >= 1){
          
          // es6 destructuring syntax
          // It will switch parent node with the one that already is inserted
          // [heap[Math.floor(idx/2)] - Parent node
          // heap[idx] - node that we inserted      
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];

          // If the parent node is not the root node, we gonna set the index as the parent. And then we repeat the "while" process   
          if (Math.floor(idx/2) > 1) {
            idx = Math.floor(idx/2);
          
          } else {
            break;
          };
        };
      };
    };
  };


  // It will always remove the smallest one
  this.remove = function() { 
    let smallest = heap[1];

    // Check if as more then one node in the Heap 
    if (heap.length > 2){
      
      // Set the smallest as the last node in the array 
      heap[1] = heap[heap.length - 1];

      // After the step before, it will remove the last index of the completely
      heap.splice(heap.length - 1);

      // If heap.length is equal 3, is only 2 numbers that we have treat
      if (heap.length == 3) {
        if(heap[1] > heap[2]) {

          // switch the position with the second is less then first one
          [heap[1], heap[2]] = [heap[2], heap[1]];
        };
        return smallest;
      };

      
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      
      // heap[i] >= heap[left] - root node is more than or equal to its left child
      // or
      // heap[i] >= heap[right]) - root node is more than or equal to its right child  
      while (heap[i] >= heap[left] || heap[i] >= heap[right]){
  
        if (heap[left] < heap[right]){
          
          // Switch the "point" of root node with left node
          [heap[i], heap[left]] = [heap[left], heap[i]];

          // Set the index to be the node that was at top
          i = 2 * i

    
        } else {
          // Switch the "point" of root node with left node   
          [heap[i], heap[right]] = [heap[right], heap[i]];

          // Set the index to be the node that was at top    
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        };
      };
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    };
    return smallest;
  };

  // Heap sort
  // This is one of the most efficient sorting algorithms with average and worst-cas performance of O(n) and O(log n)??? WTF
  /* Heap sort workds by taking an unsorted array, adding each time in the array into a main heap and then extracting every item out of main heap into a new array, the main heap structure ensures that the new array will contain the original items in least to greatest order */
  
  this.sort = function() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  };

};

// TEST we can donwload the code of HTML CSS to see how it works 