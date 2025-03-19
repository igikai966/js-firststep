//MAPS(instance- true, objects)
/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.*/
// to create MAP-1) passing an array to new Map()
// 2) Create a Map and use Map.set()
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");// 500

// MAP METHODS
/*
new Map(),Map.get(),Map.set(),Map.size,Map.delete(),Map.clear()
,Map.has(),Map.forEach(),Map.entries(),Map.keys(),Map.values(),Map.groupBy()
*/
// Create an Array
const fruits3 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Map.groupBy(fruits3, myCallback);