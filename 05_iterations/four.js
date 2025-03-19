//SETS
  /*
  A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.
*/
// Create a Set(instance- true)(sets are objects)
const letter = new Set();

// Add Values to the Set
letter.add("a");
letter.add("b");
letter.add("c");

// Set Methods-

/*
new Set(),add(),for..of,has(),forEach(),value(),keys(),
enteries()
*/
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator1 = letters.entries();// a,ab,bc,c
const myIterator2 = letters.keys();// abc
const myIterator3 = letters.values();//abc


// List all Entries
let text = "";
for (const entry of myIterator2) {
  text += entry;
}
let text2="";
letters.forEach (function(value) {
    text2 += value;
  })
  console.log(text2);//abc

  answer = letter.has("d");


