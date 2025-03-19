//for of loop
//for of is used to iterate over object values.
// also used to iterate over arrays, strings,maps,sets etc.
// ["", "", ""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]
for(num of arr){
    console.log(num);
}

const greetings ='Hello worls!'
for(const greet of greetings){
    console.log(greet);
}


const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    // code block to be executed
  }
  

