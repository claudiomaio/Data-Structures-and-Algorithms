// SETS
 
function mySet() {

  // the var collection will hold the set 
  var collection = [];
  
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  
  };

  // this method will return all the values in the set
  this.values = function() {
    return collection;

  };

  // this method will add and element to the set
  this.add = function(element) {
    // it call the method "has" if does not have the elemet gives true
    if(!this.has(element)){
      collection.push(element);
      return true;

    }
    return false;
  };

  // this method will remove and element from a set
  this.remove = function(element) {
    
    // check the element is in the collection
    if(this.has(element)){

      // find the index of the element is
      index = collection.indexOf(element);
      
      // remove it with splice that starts at the index of the element and for one("1") element
      collection.splice(index,1);
      return true;

    }
    return false;
  }

  // this method will return the size of the collection
  this.size = function() {
    return collection.length;
  }

  // this method will return the union of two sets

  // Call the union method on the original set and gonna pass in the other set that we want to combine
  this.union = function(otherSet) {
    
    // Create a new set where we going to combine the set into 
    var unionSet = new mySet();
    
    //  caling the method to return the collection   
    var firstSet = this.values();

    // where we gonna have other values
    var secondSet = otherSet.values();
    
    // for the new first set and each value it will union  
    firstSet.forEach(function(e){
      unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    return unionSet;

  };


  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    
    // creation of new set
    var intersectionSet = new mySet();
    
    // It will give all values from the first set  
    var firstSet = this.values();

    // For each value of the first set we are going to check the other set has the value 
    firstSet.forEach(function(e){
      if(otherSet.has(e)){

        // And add it to the set
        intersectionSet.add(e);
      }
    });
    // In the end it will return the "intersectionSet" with all the items that are in both sets
    return intersectionSet;
  };

  // method will return the difference of two sets as new set
  this.difference = function(otherSet){
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      differenceSet.add(e);
    });
    return differenceSet;
  }
































};